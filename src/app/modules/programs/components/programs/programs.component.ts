import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, map, switchMap, tap } from 'rxjs';
import { I18ns } from 'src/app/core/utils/i18n/I18n';
import { memoize } from 'src/app/core/utils/memoize/memoize';
import { TeamStore } from 'src/app/modules/lead-team/team.store';
import { ProfileStore } from 'src/app/modules/profile/profile.store';
import { AltoRoutes } from 'src/app/modules/shared/constants/routes';
import {
  ProgramDtoApi,
  QuestionDtoApi,
  QuestionDtoPaginatedResponseApi,
  QuestionSubmittedDtoApi,
  ScoreTypeEnumApi,
  ScoresResponseDtoApi,
  TagDtoApi,
  UserDtoApi,
} from 'src/app/sdk';
import { QuestionFilters } from '../../models/question.model';
import { ScoreDuration } from '../../models/score.model';
import { TagFilters } from '../../models/tag.model';
import { ProgramsStore } from '../../programs.store';
import { ProgramsRestService } from '../../services/programs-rest.service';
import { QuestionsRestService } from '../../services/questions-rest.service';
import { QuestionsSubmittedRestService } from '../../services/questions-submitted-rest.service';
import { ScoresRestService } from '../../services/scores-rest.service';
import { ScoresService } from '../../services/scores.service';
import { TagsRestService } from '../../services/tags-rest.service';
import { TagsServiceService } from '../../services/tags-service.service';
import { QuestionFormComponent } from '../questions/question-form/question-form.component';
import { TagsFormComponent } from '../tags/tag-form/tag-form.component';

@UntilDestroy()
@Component({
  selector: 'alto-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent implements OnInit {
  I18ns = I18ns;
  AltoRoutes = AltoRoutes;
  //
  programsCount = 0;
  //
  questions: QuestionDtoApi[] = [];
  questionsPage = 1;
  questionsCount = 0;
  questionsPageSize = 10;
  isQuestionsLoading = true;
  questionsScore = new Map<string, number>();
  questionFilters: QuestionFilters = { programs: [], tags: [], contributors: [], search: '' };
  //
  userCache = new Map<string, UserDtoApi>();
  pillsRowDisplayLimit = 3;
  submittedQuestions: QuestionSubmittedDtoApi[] = [];
  submittedQuestionsPage = 1;
  submittedQuestionsCount = 0;
  submittedQuestionsPageSize = 10;
  isSubmittedQuestionsLoading = true;
  //
  tags!: TagDtoApi[];
  paginatedTags!: TagDtoApi[];
  tagsPage = 1;
  tagsCount = 0;
  tagsPageSize = 10;
  isTagsLoading = true;
  tagPrograms = new Map<string, string[]>();
  isTagProgramsLoading = true;
  tagFilters: TagFilters = { programs: [], contributors: [], search: '' };
  tagsScore = new Map<string, number>();

  //

  constructor(
    private readonly offcanvasService: NgbOffcanvas,
    private readonly programRestService: ProgramsRestService,
    private readonly questionsService: QuestionsRestService,
    private readonly scoresRestServices: ScoresRestService,
    private readonly scoresServices: ScoresService,

    private readonly questionsSubmittedRestService: QuestionsSubmittedRestService,
    private readonly tagRestService: TagsRestService,
    private readonly tagsService: TagsServiceService,
    public readonly teamStore: TeamStore,
    public readonly profileStore: ProfileStore,
    public readonly programsStore: ProgramsStore,
  ) {}

  ngOnInit(): void {
    this.getQuestions();
    this.getSubmittedQuestions();
    this.getTags();
  }

  openQuestionForm(question?: QuestionDtoApi) {
    const canvasRef = this.offcanvasService.open(QuestionFormComponent, {
      position: 'end',
      panelClass: 'overflow-auto',
    });
    canvasRef.componentInstance.question = question;
    canvasRef.componentInstance.createdQuestion.pipe(tap(() => this.getQuestions())).subscribe();
  }

  openSubmittedQuestionForm(question?: QuestionSubmittedDtoApi) {
    const canvasRef = this.offcanvasService.open(QuestionFormComponent, {
      position: 'end',
      panelClass: 'overflow-auto',
    });
    canvasRef.componentInstance.question = question;
    canvasRef.componentInstance.isSubmitted = true;
    canvasRef.componentInstance.dismissedQuestion.pipe(tap(() => this.getSubmittedQuestions())).subscribe();
  }

  openTagForm(tag?: TagDtoApi) {
    const canvasRef = this.offcanvasService.open(TagsFormComponent, {
      position: 'end',
      panelClass: 'overflow-auto',
    });

    canvasRef.componentInstance.tag = tag;
    canvasRef.componentInstance.createdTag.pipe(tap(() => this.getTags()));
  }

  getQuestions(
    {
      programs = this.questionFilters.programs,
      tags = this.questionFilters.tags,
      contributors = this.questionFilters.contributors,
      search = this.questionFilters.search,
    }: QuestionFilters = this.questionFilters,
  ) {
    this.isQuestionsLoading = true;

    this.questionFilters.programs = programs;
    this.questionFilters.tags = tags;
    this.questionFilters.contributors = contributors;
    this.questionFilters.search = search;

    this.questionsService
      .getQuestionsPaginated({
        page: this.questionsPage,
        itemsPerPage: this.questionsPageSize,
        programIds: programs?.join(','),
        tagIds: tags?.join(','),
        createdBy: contributors?.length ? contributors?.join(',') : undefined,
        search,
      })
      .pipe(
        tap((questions) => {
          this.questions = questions.data ?? [];
          this.questionsCount = questions.meta.totalItems;
        }),
        switchMap((questions) => this.getScoresfromQuestions(questions)),
        map(() => this.questions?.map((q) => q.createdBy) ?? []),
        map((userIds) => userIds.filter((x, y) => userIds.indexOf(x) === y)),
        map((ids) => this.getUsersfromIds(ids)),
        tap((users) => users.forEach((u) => this.userCache.set(u.id, u))),
        tap(() => (this.isQuestionsLoading = false)),
        untilDestroyed(this),
      )
      .subscribe();
  }

  getUsersfromIds(ids: string[]): UserDtoApi[] {
    const filter = ids.filter((i) => !this.userCache.has(i));
    return this.profileStore.users.value.filter((u) => filter.some((i) => i === u.id));
  }

  getScoresfromQuestions(questions: QuestionDtoPaginatedResponseApi): Observable<ScoresResponseDtoApi> {
    const ids = questions.data?.map((q) => q.id);
    return this.scoresRestServices
      .getScores({
        type: ScoreTypeEnumApi.Question,
        duration: ScoreDuration.Month,
        ids,
      })
      .pipe(
        tap((scores) => {
          ids?.forEach((id) => {
            const qScore = scores.scores.filter((score) => score.id === id);
            this.questionsScore.set(
              id,
              this.scoresServices.reduceWithoutNull(qScore.shift()?.averages ?? []) || 0,
            );
          });
        }),
      );
  }

  getScoresFromTags(ids: string[]) {
    return this.scoresRestServices
      .getScores({
        type: ScoreTypeEnumApi.Tag,
        duration: ScoreDuration.Month,
        ids,
      })
      .pipe(
        tap((scores) => {
          ids?.forEach((id) => {
            const qScore = scores.scores.filter((score) => score.id === id);
            this.tagsScore.set(
              id,
              this.scoresServices.reduceWithoutNull(qScore.shift()?.averages ?? []) || 0,
            );
          });
        }),
      );
  }

  changeQuestionsPage() {
    this.getQuestions();
  }

  @memoize()
  getUser(id: string) {
    return this.userCache.get(id);
  }

  @memoize()
  getQuestionScore(id: string): number {
    const output = this.questionsScore.get(id) || 0;
    return isNaN(output) ? 0 : output;
  }

  @memoize()
  getTagScore(id: string): number {
    const output = this.tagsScore.get(id) || 0;
    return isNaN(output) ? 0 : output;
  }

  getSubmittedQuestions() {
    return this.questionsSubmittedRestService
      .getQuestionsPaginated({
        page: this.submittedQuestionsPage,
        itemsPerPage: this.submittedQuestionsPageSize,
      })
      .pipe(
        tap((q) => (this.submittedQuestions = q.data ?? [])),
        tap((q) => (this.submittedQuestionsCount = q.meta.itemsPerPage ?? 0)),
        map((questions) => questions.data?.map((q) => q.createdBy) ?? []),
        map((userIds) => userIds.filter((x, y) => userIds.indexOf(x) === y)),
        map((ids) => this.getUsersfromIds(ids)),
        tap((users) => users.forEach((u) => this.userCache.set(u.id, u))),
        tap(() => (this.isSubmittedQuestionsLoading = false)),
      )
      .subscribe();
  }

  changeSubmittedQuestionsPage() {
    this.getSubmittedQuestions();
  }

  getTags() {
    this.tagRestService
      .getTags()
      .pipe(
        tap((tags) => (this.tags = tags)),
        tap((tags) => (this.tagsCount = tags.length)),
        tap((tags) => this.getProgramsfromTags(tags)),
        tap((tags) => this.changeTagsPage(tags)),
        switchMap((tags) => this.getScoresFromTags(tags.map((t) => t.id))),
        map(() => this.tags.map((t) => t.createdBy) ?? []),
        map((userIds) => userIds.filter((x, y) => userIds.indexOf(x) === y)),
        map((ids) => this.getUsersfromIds(ids)),
        tap((users) => users.forEach((u) => this.userCache.set(u.id, u))),
        tap(() => (this.isTagsLoading = false)),
      )
      .subscribe();
  }

  changeTagsPage(tags: TagDtoApi[]) {
    this.tagsCount = tags.length;
    this.paginatedTags = tags.slice(
      (this.tagsPage - 1) * this.tagsPageSize,
      this.tagsPage * this.tagsPageSize,
    );
  }

  filterTags(
    {
      programs = this.tagFilters.programs,
      contributors = this.tagFilters.contributors,
      search = this.tagFilters.search,
    }: TagFilters = this.tagFilters,
  ) {
    this.tagFilters.programs = programs;
    this.tagFilters.contributors = contributors;
    this.tagFilters.search = search;

    const res = this.tagsService.filterTags(this.tags, { programs, contributors, search });
    this.changeTagsPage(res);
  }

  getProgramsfromTags(tags: TagDtoApi[]) {
    const ids = tags.map((tag) => tag.id);
    this.isTagProgramsLoading = true;
    this.programRestService
      .getPrograms()
      .pipe(
        tap((programs) => {
          ids.forEach((tagId) => {
            this.tagPrograms.set(tagId, this.tagProgramsLoop(tagId, programs));
          });
        }),
        tap(() => (this.isTagProgramsLoading = false)),
      )
      .subscribe();
  }

  tagProgramsLoop(tagId: string, programs: ProgramDtoApi[]): string[] {
    const programList: string[] = [];
    programs.forEach((program) => {
      if (program.tags?.some((tag) => tag.id === tagId)) {
        programList.push(program.name);
      }
    });
    return programList;
  }

  @memoize()
  getTagPrograms(id: string) {
    return this.tagPrograms.get(id) ?? [];
  }
}
