import { Component, OnInit } from '@angular/core';
import { GetNextQuestionsForUserRequestParams, QuestionApi } from '@usealto/sdk-ts-angular';
import { map, tap, timer } from 'rxjs';
import { I18ns } from 'src/app/core/utils/i18n/I18n';
import { ProfileStore } from 'src/app/modules/profile/profile.store';
import { UsersRestService } from 'src/app/modules/profile/services/users-rest.service';
import { AltoRoutes } from 'src/app/modules/shared/constants/routes';
@Component({
  selector: 'alto-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
  I18ns = I18ns;
  AltoRoutes = AltoRoutes;
  displayTime = 5;
  time = 5000;
  timer: any;

  remainingQuestions: QuestionApi[] = [];
  questionsCount = 0;
  questionsPage = 1;
  questionsPageSize = 25;
  displayedQuestion!: QuestionApi;
  isQuestionsLoading = true;

  currentAnswers: string[] = [];
  currentAnswersWithResponse = new Map<string, boolean>();
  selectedAnswer = '';

  constructor(
    private readonly usersRestService: UsersRestService,
    private readonly profileStore: ProfileStore,
  ) {}

  ngOnInit(): void {
    this.getNextQuestion();
  }

  getQuestions(page: number) {
    this.isQuestionsLoading = true;
    this.usersRestService
      .getNextQuestionsPaginated(this.profileStore.user.value.id, {
        page: page,
      } as GetNextQuestionsForUserRequestParams)
      .pipe(
        tap((res) => {
          this.remainingQuestions = res.data ?? [];
          this.questionsCount = res.meta.totalItems ?? 0;
          this.getNextQuestion();
        }),
      )
      .subscribe();
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  submitAnswer() {
    this.getNextQuestion();
  }

  getNextQuestion() {
    if (this.remainingQuestions.length === 0) {
      this.questionsPage++;
      this.getQuestions(this.questionsPage);
    } else {
      this.displayedQuestion = this.remainingQuestions.pop() as QuestionApi;
      this.currentAnswers = this.shuffleArray([
        ...this.displayedQuestion.answersAccepted,
        ...this.displayedQuestion.answersWrong,
      ]);
      this.mergeArrays(this.displayedQuestion.answersAccepted);
      this.isQuestionsLoading = false;
    }
  }

  countDown(time: number) {
    const date = new Date();

    this.timer = timer(0, 150)
      .pipe(
        tap(() => {
          const dateNow = new Date();
          const diff = dateNow.getTime() - date.getTime();
          this.displayTime = Math.floor((time - diff) / 1000);
          if (this.displayTime <= 0) {
            this.timer.unsubscribe();
          }
        }),
      )
      .subscribe();
  }

  mergeArrays(correct: string[]) {
    this.currentAnswers.forEach((answer) => {
      if (correct.includes(answer)) {
        this.currentAnswersWithResponse.set(answer, true);
      } else {
        this.currentAnswersWithResponse.set(answer, false);
      }
    });
  }

  shuffleArray(array: string[]): string[] {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }

    return shuffledArray;
  }
}
