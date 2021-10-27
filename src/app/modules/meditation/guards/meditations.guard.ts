import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

// Actions
import { loadMeditations } from '@meditation/store/actions/meditation.actions';

// Selectors
import { selectIsMeditationsLoaded } from '@meditation/store/selectors/meditation.selector';

@Injectable()
export class MeditationsGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsMeditationsLoaded).pipe(
      tap(
        (isLoaded: boolean) =>
          isLoaded || this.store.dispatch(loadMeditations()),
      ),
      switchMap(() => of(true)),
    );
  }
}
