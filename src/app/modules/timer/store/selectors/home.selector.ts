import { createSelector } from '@ngrx/store';

// Store
import {
  selectTimerModuleState,
  TimerModuleState,
} from '@timer/store/reducers/timer.state';

// Reducers
import { durationState } from '@timer/store/reducers/timer.reducer';

// Sub-feature selector
export const selectTimerState = createSelector(
  selectTimerModuleState,
  (state: TimerModuleState) => state.timer,
);

// data selectors
export const selectDuration = createSelector(selectTimerState, durationState);
