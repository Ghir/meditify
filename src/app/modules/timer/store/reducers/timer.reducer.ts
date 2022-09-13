import { Action, createReducer, on } from '@ngrx/store';

import { setDuration } from '@timer/store/actions/home.actions';

export interface TimerState {
  // data
  duration: number;
  // state
}

export const initialState: TimerState = {
  // data
  duration: 120,
  // state
};

const timerReducer = createReducer(
  initialState,

  on(
    setDuration,
    (state, { duration }): TimerState => ({
      ...state,
      duration,
    }),
  ),
);

export const reducer = (state: TimerState | undefined, action: Action) =>
  timerReducer(state, action);

// Data
export const durationState = (state: TimerState) => state.duration;
// State
