// Store
import { initialState, reducer } from '@home/store/reducers/home.reducer';

// Actions
import {
  loadQuoteFailure,
  loadQuoteSuccess,
} from '@home/store/actions/home.actions';
import { loadQuote } from '@home/store/actions/home.actions';

// Mocks
import { quoteMock } from '@home/mocks/quote.mock';

describe('Home Reducer', () => {
  it('should return the previous state', () => {
    const action = {} as any;

    const result = reducer(initialState, action);

    expect(result).toBe(initialState);
  });

  it('should set quote loading state', () => {
    const result = reducer(initialState, loadQuote);

    expect(result.isQuoteLoading).toBe(true);
    expect(result.isQuoteLoaded).toBe(false);
    expect(result.isQuoteError).toBe(false);
  });

  it('should set quote error state', () => {
    const result = reducer(initialState, loadQuoteFailure);

    expect(result.isQuoteError).toBe(true);
    expect(result.isQuoteLoading).toBe(false);
    expect(result.isQuoteLoaded).toBe(false);
  });

  it('should set quote loading success', () => {
    const result = reducer(
      initialState,
      loadQuoteSuccess({
        quote: quoteMock.content,
      }),
    );

    expect(result.quote).toBe(quoteMock.content);
    expect(result.isQuoteError).toBe(false);
    expect(result.isQuoteLoading).toBe(false);
    expect(result.isQuoteLoaded).toBe(true);
  });
});
