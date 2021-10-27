import { Action, createReducer, on } from '@ngrx/store';

// Actions
import {
  loadQuote,
  loadQuoteFailure,
  loadQuoteSuccess,
} from '@home/store/actions/home.actions';

export interface HomeState {
  // data
  quote: string;
  // state
  isQuoteLoading: boolean;
  isQuoteLoaded: boolean;
  isQuoteError: boolean;
}

export const initialState: HomeState = {
  // data
  quote: null,
  // state
  isQuoteLoading: false,
  isQuoteLoaded: false,
  isQuoteError: false,
};

const homeReducer = createReducer(
  initialState,

  on(
    loadQuote,
    (state): HomeState => ({
      ...state,
      isQuoteLoading: true,
      isQuoteLoaded: false,
      isQuoteError: false,
    }),
  ),

  on(
    loadQuoteFailure,
    (state): HomeState => ({
      ...state,
      isQuoteLoading: false,
      isQuoteLoaded: false,
      isQuoteError: true,
    }),
  ),

  on(
    loadQuoteSuccess,
    (state, { quote }): HomeState => ({
      ...state,
      quote,
      isQuoteLoading: false,
      isQuoteLoaded: true,
      isQuoteError: false,
    }),
  ),
);

export const reducer = (state: HomeState | undefined, action: Action) =>
  homeReducer(state, action);

// Data
export const quoteData = (state: HomeState) => state.quote;
// State
export const quoteLoadingState = (state: HomeState) => state.isQuoteLoading;
export const quoteLoadedState = (state: HomeState) => state.isQuoteLoaded;
export const quoteErrorState = (state: HomeState) => state.isQuoteError;
