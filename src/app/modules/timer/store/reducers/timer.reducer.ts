import { Action, createReducer, on } from '@ngrx/store';

// Models
import { Session } from '@timer/models/session.model';

// Actions
import {
  createSession,
  createSessionFailure,
  createSessionSuccess,
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
  isCreationInProgress: boolean;
  isCreationDone: boolean;
  isCreationError: boolean;
}

export const initialState: TimerState = {
  // data
  sessions: [],
  // state
  isSessionsLoading: false,
  isSessionsLoaded: false,
  isSessionsError: false,
  isCreationInProgress: false,
  isCreationDone: false,
  isCreationError: false,
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

  on(createSession, (state) => ({
    ...state,
    isCreationInProgress: true,
    isCreationDone: false,
    isCreationError: false,
  })),

  on(createSessionFailure, (state) => ({
    ...state,
    isCreationInProgress: false,
    isCreationDone: true,
    isCreationError: true,
  })),

  on(createSessionSuccess, (state) => ({
    ...state,
    isCreationInProgress: false,
    isCreationDone: true,
    isCreationError: false,
  })),
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
export const creationLoadingState = (state: TimerState) =>
  state.isCreationInProgress;
export const creationLoadedState = (state: TimerState) => state.isCreationDone;
export const creationErrorState = (state: TimerState) => state.isCreationError;
