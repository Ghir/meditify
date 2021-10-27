import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  CollectionReference,
  QuerySnapshot,
} from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Models
import { Quote } from '@home/models/quote.model';

@Injectable()
export class QuoteService {
  constructor(private firestore: AngularFirestore) {}

  getDailyQuote(): Observable<string> {
    return this.firestore
      .collection<Quote>('quotes', (ref: CollectionReference) =>
        ref.where('current', '==', true),
      )
      .get()
      .pipe(
        map(
          (snapshot: QuerySnapshot<Quote>) =>
            snapshot.docs && snapshot.docs[0].data(),
        ),
        map((quote: Quote) => quote.content),
      );
  }
}
