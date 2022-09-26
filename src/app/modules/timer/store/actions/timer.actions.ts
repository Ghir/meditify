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

export const createSession = createAction(
  '[Timer | Timer Modal] Create Session',
  props<{ session: Session }>(),
);

export const createSessionSuccess = createAction(
  '[Timer | API] Create Session Success',
);

export const createSessionFailure = createAction(
  '[Timer | API] Create Session Failure',
  props<{ error: any }>(),
);
