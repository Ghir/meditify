import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

// Actions
import { loadCategories } from '@meditation/store/actions/meditation.actions';

// Selectors
import { selectIsCategoriesLoaded } from '@meditation/store/selectors/meditation.selector';

@Injectable()
export class CategoriesGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsCategoriesLoaded).pipe(
      tap(
        (isLoaded: boolean) =>
          isLoaded || this.store.dispatch(loadCategories()),
      ),
      switchMap(() => of(true)),
    );
  }
}
