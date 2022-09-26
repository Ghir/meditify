import { Action, createReducer, on } from '@ngrx/store';

// Models
import { Session } from '@timer/models/session.model';

// Actions
import {
  loadSessions,
  loadSessionsFailure,
  loadSessionsSuccess,
} from '@timer/store/actions/timer.actions';

export interface TimerState {
  // data
  sessions: Session[];
  // state
  isSessionsLoading: boolean;
  isSessionsLoaded: boolean;
  isSessionsError: boolean;
}

export const initialState: TimerState = {
  // data
  sessions: [],
  // state
  isSessionsLoading: false,
  isSessionsLoaded: false,
  isSessionsError: false,
};

const timerReducer = createReducer(
  initialState,

  on(
    loadSessions,
    (state): TimerState => ({
      ...state,
      isSessionsLoading: true,
      isSessionsLoaded: false,
      isSessionsError: false,
    }),
  ),

  on(
    loadSessionsFailure,
    (state): TimerState => ({
      ...state,
      isSessionsLoading: false,
      isSessionsLoaded: false,
      isSessionsError: true,
    }),
  ),

  on(
    loadSessionsSuccess,
    (state, { sessions }): TimerState => ({
      ...state,
      sessions,
      isSessionsLoading: false,
      isSessionsLoaded: true,
      isSessionsError: false,
    }),
  ),
);

export const reducer = (state: TimerState | undefined, action: Action) =>
  timerReducer(state, action);

// Data
export const sessionsState = (state: TimerState) => state.sessions;
// State
export const sessionsLoadingState = (state: TimerState) =>
  state.isSessionsLoading;
export const sessionsLoadedState = (state: TimerState) =>
  state.isSessionsLoaded;
export const sessionsErrorState = (state: TimerState) => state.isSessionsError;
