import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

// Actions
import {
  loadSessions,
  loadSessionsFailure,
  loadSessionsSuccess,
} from '@timer/store/actions/timer.actions';

// Services
import { SessionsService } from '@timer/services/sessions.service';

// Models
import { Session } from '@timer/models/session.model';

@Injectable()
export class SessionsLoadEffect {
  loadSessions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSessions),
      mergeMap(() =>
        this.sessionsService.getSessions().pipe(
          map((sessions: Session[]) =>
            loadSessionsSuccess({
              sessions,
            }),
          ),
          catchError((error) => of(loadSessionsFailure(error))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private sessionsService: SessionsService,
  ) {}
}
