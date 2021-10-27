import { createSelector } from '@ngrx/store';

// Store
import {
  selectHomeModuleState,
  HomeModuleState,
} from '@home/store/reducers/home.state';

// Reducers
import {
  quoteData,
  quoteErrorState,
  quoteLoadedState,
  quoteLoadingState,
} from '@home/store/reducers/home.reducer';

// Sub-feature selector
export const selectHomeState = createSelector(
  selectHomeModuleState,
  (state: HomeModuleState) => state.home,
);

// data selectors
export const selectQuote = createSelector(selectHomeState, quoteData);

export const selectIsQuoteLoaded = createSelector(
  selectHomeState,
  quoteLoadedState,
);

export const selectIsQuoteLoading = createSelector(
  selectHomeState,
  quoteLoadingState,
);

export const selectQuoteHasError = createSelector(
  selectHomeState,
  quoteErrorState,
);
