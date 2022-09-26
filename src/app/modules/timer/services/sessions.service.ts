import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentReference,
  QuerySnapshot,
} from '@angular/fire/compat/firestore';

import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Models
import { Session } from '@timer/models/session.model';

@Injectable()
export class SessionsService {
  constructor(private firestore: AngularFirestore) {}

  getSessions(): Observable<Session[]> {
    return this.firestore
      .collection<Session>('sessions')
      .get()
      .pipe(
        map((snapshot: QuerySnapshot<Session>) =>
          snapshot.docs.map((doc) => doc.data()),
        ),
      );
  }

  createSession(session: Session): Observable<DocumentReference<Session>> {
    return from(this.firestore.collection<Session>('sessions').add(session));
  }
}
