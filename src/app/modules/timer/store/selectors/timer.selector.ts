import { createSelector } from '@ngrx/store';

// Store
import {
  selectTimerModuleState,
  TimerModuleState,
} from '@timer/store/reducers/timer.state';

// Reducers
import {
  sessionsErrorState,
  sessionsLoadedState,
  sessionsLoadingState,
  sessionsState,
} from '@timer/store/reducers/timer.reducer';

// Sub-feature selector
export const selectTimerState = createSelector(
  selectTimerModuleState,
  (state: TimerModuleState) => state.timer,
);

// data selectors
export const selectSessions = createSelector(selectTimerState, sessionsState);

// state selectors
export const selectIsSessionsLoaded = createSelector(
  selectTimerState,
  sessionsLoadedState,
);

export const selectIsSessionsLoading = createSelector(
  selectTimerState,
  sessionsLoadingState,
);

export const selectSessionsHasError = createSelector(
  selectTimerState,
  sessionsErrorState,
);
