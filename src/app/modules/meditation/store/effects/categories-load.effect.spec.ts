import { Observable, of } from 'rxjs';

import { Action } from '@ngrx/store';

// Actions
import {
  loadCategories,
  loadCategoriesSuccess,
} from '@meditation/store/actions/meditation.actions';

// Effect
import { CategoriesLoadEffect } from '@meditation/store/effects/categories-load.effect';

// Mocks
import { categoryMock } from '@meditation/mocks/category.mock';

describe('MeditationsLoadEffect', () => {
  let actions$: Observable<any>;
  let effects: CategoriesLoadEffect;
  let meditationsServiceSpy: any;

  beforeEach(() => {
    meditationsServiceSpy = jasmine.createSpyObj('MeditationsService', [
      'getMeditationCategories',
    ]);
    actions$ = of(loadCategories);
    effects = new CategoriesLoadEffect(actions$, meditationsServiceSpy);
  });

  it('should load categories', (done) => {
    meditationsServiceSpy.getMeditationCategories.and.returnValue(
      of([categoryMock]),
    );
    const result = loadCategoriesSuccess({
      categories: [categoryMock],
    });

    (effects.loadCategories$ as Observable<Action>).subscribe((res) => {
      expect(res).toEqual(result);
      expect(
        meditationsServiceSpy.getMeditationCategories,
      ).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
