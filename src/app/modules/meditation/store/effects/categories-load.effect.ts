import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

// Actions
import {
  loadCategories,
  loadCategoriesFailure,
  loadCategoriesSuccess,
} from '@meditation/store/actions/meditation.actions';

// Services
import { MeditationsService } from '@meditation/services/meditations.service';

// Models
import { Category } from '@meditation/models/category.model';

@Injectable()
export class CategoriesLoadEffect {
  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCategories),
      mergeMap(() =>
        this.meditationsService.getMeditationCategories().pipe(
          map((categories: Category[]) =>
            loadCategoriesSuccess({
              categories,
            }),
          ),
          catchError((error) => of(loadCategoriesFailure(error))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private meditationsService: MeditationsService,
  ) {}
}
