import { createSelector } from '@ngrx/store';

// Store
import {
  selectMeditationModuleState,
  MeditationModuleState,
} from '@meditation/store/reducers/meditation.state';

// Reducers
import {
  categoriesData,
  categoriesErrorState,
  categoriesLoadedState,
  categoriesLoadingState,
  meditationsData,
  meditationsErrorState,
  meditationsLoadedState,
  meditationsLoadingState,
} from '@meditation/store/reducers/meditation.reducer';

// Models
import { Meditation } from '@meditation/models/meditation.model';
import { Category } from '@meditation/models/category.model';

// Sub-feature selector
export const selectMeditationState = createSelector(
  selectMeditationModuleState,
  (state: MeditationModuleState) => state.meditation,
);

// data selectors
export const selectMeditations = createSelector(
  selectMeditationState,
  meditationsData,
);
export const selectCategories = createSelector(
  selectMeditationState,
  categoriesData,
);

export const selectIsCategoriesLoaded = createSelector(
  selectMeditationState,
  categoriesLoadedState,
);

export const selectIsCategoriesLoading = createSelector(
  selectMeditationState,
  categoriesLoadingState,
);

export const selectCategoriesHasError = createSelector(
  selectMeditationState,
  categoriesErrorState,
);

export const selectIsMeditationsLoaded = createSelector(
  selectMeditationState,
  meditationsLoadedState,
);

export const selectIsMeditationsLoading = createSelector(
  selectMeditationState,
  meditationsLoadingState,
);

export const selectMeditationsHasError = createSelector(
  selectMeditationState,
  meditationsErrorState,
);

export const selectCategoryById = (categoryId: string) =>
  createSelector(
    selectCategories,
    (categories: Category[]) =>
      categories &&
      categories.find((category: Category) => category.id === categoryId),
  );

export const selectMeditationsByCategoryId = (categoryId: string) =>
  createSelector(
    selectMeditations,
    (meditations: Meditation[]) =>
      meditations &&
      meditations.filter(
        (meditation: Meditation) => meditation.categoryId === categoryId,
      ),
  );
