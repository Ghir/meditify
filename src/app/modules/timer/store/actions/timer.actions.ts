import { createAction, props } from '@ngrx/store';

// Models
import { Session } from '@timer/models/session.model';

export const loadSessions = createAction('[Timer | Stats Page] Load Sessions');

export const loadSessionsSuccess = createAction(
  '[Timer | API] Load Sessions Success',
  props<{ sessions: Session[] }>(),
);

export const loadSessionsFailure = createAction(
  '[Timer | API] Load Sessions Failure',
  props<{ error: any }>(),
);
