import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

// Actions
import {
  loadMeditations,
  loadMeditationsFailure,
  loadMeditationsSuccess,
} from '@meditation/store/actions/meditation.actions';

// Services
import { MeditationsService } from '@meditation/services/meditations.service';

// Models
import { Meditation } from '@meditation/models/meditation.model';

@Injectable()
export class MeditationsLoadEffect {
  loadMeditations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMeditations),
      mergeMap(() =>
        this.meditationsService.getMeditations().pipe(
          map((meditations: Meditation[]) =>
            loadMeditationsSuccess({
              meditations,
            }),
          ),
          catchError((error) => of(loadMeditationsFailure(error))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private meditationsService: MeditationsService,
  ) {}
}
