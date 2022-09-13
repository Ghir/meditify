// import { Injectable } from '@angular/core';

// import { of } from 'rxjs';
// import { catchError, map, mergeMap } from 'rxjs/operators';

// import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
// import { Action } from '@ngrx/store';

// // Actions
// import {
//   loadQuote,
//   loadQuoteFailure,
//   loadQuoteSuccess,
// } from '@home/store/actions/home.actions';

// // Services
// import { QuoteService } from '@home/services/quote.service';

// @Injectable()
// export class QuoteLoadEffect implements OnInitEffects {
//   loadQuote$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(loadQuote),
//       mergeMap(() =>
//         this.quoteService.getDailyQuote().pipe(
//           map((quote: string) =>
//             loadQuoteSuccess({
//               quote,
//             }),
//           ),
//           catchError((error) => of(loadQuoteFailure(error))),
//         ),
//       ),
//     ),
//   );

//   constructor(private actions$: Actions, private quoteService: QuoteService) {}

//   ngrxOnInitEffects(): Action {
//     return loadQuote();
//   }
// }
