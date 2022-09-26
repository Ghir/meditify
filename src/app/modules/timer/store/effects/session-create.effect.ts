import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

// Actions
import {
  createSession,
  createSessionSuccess,
  createSessionFailure,
} from '@timer/store/actions/timer.actions';

// Services
import { SessionsService } from '@timer/services/sessions.service';

@Injectable()
export class SessionCreateEffect {
  loadSessions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createSession),
      mergeMap(({ session }) =>
        this.sessionsService.createSession(session).pipe(
          map(() => createSessionSuccess()),
          catchError((error) => of(createSessionFailure(error))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private sessionsService: SessionsService,
  ) {}
}
