import { createFeatureSelector } from '@ngrx/store';

// Store
import { TimerState } from '@timer/store/reducers/timer.reducer';

// Reducer
import { reducer } from '@timer/store/reducers/timer.reducer';

export const timerFeatureKey = 'timer';

export interface TimerModuleState {
  timer: TimerState;
}

export const reducers = {
  timer: reducer,
};

export const selectTimerModuleState =
  createFeatureSelector<TimerModuleState>(timerFeatureKey);
