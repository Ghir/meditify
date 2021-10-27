import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  QuerySnapshot,
} from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Models
import { Meditation } from '@meditation/models/meditation.model';
import { Category } from '@meditation/models/category.model';

@Injectable()
export class MeditationsService {
  constructor(private firestore: AngularFirestore) {}

  getMeditationCategories(): Observable<Category[]> {
    return this.firestore
      .collection<Category>('meditation_categories')
      .get()
      .pipe(
        map((snapshot: QuerySnapshot<Category>) =>
          snapshot.docs.map((doc) => doc.data()),
        ),
      );
  }

  getMeditations(): Observable<Meditation[]> {
    return this.firestore
      .collection<Meditation>('meditations')
      .get()
      .pipe(
        map((snapshot: QuerySnapshot<Meditation>) =>
          snapshot.docs.map((doc) => doc.data()),
        ),
      );
  }
}
