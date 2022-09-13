// import { Observable, of } from 'rxjs';

// import { Action } from '@ngrx/store';

// // Actions
// import { loadQuote } from '@home/store/actions/home.actions';
// import { loadQuoteSuccess } from '@home/store/actions/home.actions';

// // Effect
// import { QuoteLoadEffect } from '@home/store/effects/quote-load.effect';

// // Mocks
// import { quoteMock } from '@home/mocks/quote.mock';

// describe('QuoteLoadEffect', () => {
//   let actions$: Observable<any>;
//   let effects: QuoteLoadEffect;
//   let quoteServiceSpy: any;

//   beforeEach(() => {
//     quoteServiceSpy = jasmine.createSpyObj('QuoteService', ['getDailyQuote']);
//     actions$ = of(loadQuote);
//     effects = new QuoteLoadEffect(actions$, quoteServiceSpy);
//   });

//   it('should load quote', (done) => {
//     quoteServiceSpy.getDailyQuote.and.returnValue(of(quoteMock.content));
//     const result = loadQuoteSuccess({
//       quote: quoteMock.content,
//     });

//     (effects.loadQuote$ as Observable<Action>).subscribe((res) => {
//       expect(res).toEqual(result);
//       expect(quoteServiceSpy.getDailyQuote).toHaveBeenCalledTimes(1);
//       done();
//     });
//   });
// });
