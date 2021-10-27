import { createAction, props } from '@ngrx/store';

export const loadQuote = createAction('[Home | Effects Init] Load Quote');

export const loadQuoteSuccess = createAction(
  '[Home | API] Load Quote Success',
  props<{ quote: string }>(),
);

export const loadQuoteFailure = createAction(
  '[Home | API] Load Quote Failure',
  props<{ error: any }>(),
);
