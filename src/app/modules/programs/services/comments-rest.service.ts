import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { CommentDtoApi, CommentsApiService, GetCommentsRequestParams } from 'src/app/sdk';
import { ProgramsStore } from '../programs.store';

@Injectable({
  providedIn: 'root',
})
export class CommentsRestService {
  constructor(
    private readonly commentApi: CommentsApiService,
    private readonly programStore: ProgramsStore,
  ) {}

  getComments(req?: GetCommentsRequestParams): Observable<CommentDtoApi[]> {
    if (this.programStore.unreadComments.value.length) {
      return this.programStore.unreadComments.value$;
    } else {
      const par = {
        ...req,
        page: req?.page ?? 1,
        itemsPerPage: req?.itemsPerPage ?? 300,
        isRead: req?.isRead ?? false,
      };

      return this.commentApi.getComments(par).pipe(
        map((r) => r.data ?? []),
        tap((comments) => (this.programStore.unreadComments.value = comments.filter((c) => !c.isRead))),
      );
    }
  }
}
