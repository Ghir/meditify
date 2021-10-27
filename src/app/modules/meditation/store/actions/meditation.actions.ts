import { createAction, props } from '@ngrx/store';

// Models
import { Meditation } from '@meditation/models/meditation.model';
import { Category } from '@meditation/models/category.model';

export const loadCategories = createAction(
  '[Meditation | Categories Page] Load Categories',
);

export const loadCategoriesSuccess = createAction(
  '[Meditation | API] Load Categories Success',
  props<{ categories: Category[] }>(),
);

export const loadCategoriesFailure = createAction(
  '[Meditation | API] Load Categories Failure',
  props<{ error: any }>(),
);

export const loadMeditations = createAction(
  '[Meditation | Meditations Page] Load Meditations',
);

export const loadMeditationsSuccess = createAction(
  '[Meditation | API] Load Meditations Success',
  props<{ meditations: Meditation[] }>(),
);

export const loadMeditationsFailure = createAction(
  '[Meditation | API] Load Meditations Failure',
  props<{ error: any }>(),
);
