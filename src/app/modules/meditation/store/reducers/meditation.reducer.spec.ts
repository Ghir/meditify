// Actions
import {
  loadMeditations,
  loadMeditationsFailure,
  loadMeditationsSuccess,
  loadCategories,
  loadCategoriesFailure,
  loadCategoriesSuccess,
} from '@meditation/store/actions/meditation.actions';

// Mocks
import { meditationMock } from '@meditation/mocks/meditation.mock';
import { categoryMock } from '@meditation/mocks/category.mock';

// Store
import {
  initialState,
  reducer,
} from '@meditation/store/reducers/meditation.reducer';

describe('Meditation Reducer', () => {
  it('should return the previous state', () => {
    const action = {} as any;

    const result = reducer(initialState, action);

    expect(result).toBe(initialState);
  });

  it('should set categories loading state', () => {
    const result = reducer(initialState, loadCategories);

    expect(result.isCategoriesLoading).toBe(true);
    expect(result.isCategoriesLoaded).toBe(false);
    expect(result.isCategoriesError).toBe(false);
  });

  it('should set categories error state', () => {
    const result = reducer(initialState, loadCategoriesFailure);

    expect(result.isCategoriesError).toBe(true);
    expect(result.isCategoriesLoading).toBe(false);
    expect(result.isCategoriesLoaded).toBe(false);
  });

  it('should set categories loading  success', () => {
    const result = reducer(
      initialState,
      loadCategoriesSuccess({
        categories: [categoryMock],
      }),
    );

    expect(result.categories[0].id).toBe(categoryMock.id);
    expect(result.isCategoriesError).toBe(false);
    expect(result.isCategoriesLoading).toBe(false);
    expect(result.isCategoriesLoaded).toBe(true);
  });

  it('should set meditations loading state', () => {
    const result = reducer(initialState, loadMeditations);

    expect(result.isMeditationsLoading).toBe(true);
    expect(result.isMeditationsLoaded).toBe(false);
    expect(result.isMeditationsError).toBe(false);
  });

  it('should set meditations error state', () => {
    const result = reducer(initialState, loadMeditationsFailure);

    expect(result.isMeditationsError).toBe(true);
    expect(result.isMeditationsLoading).toBe(false);
    expect(result.isMeditationsLoaded).toBe(false);
  });

  it('should set meditations loading success', () => {
    const result = reducer(
      initialState,
      loadMeditationsSuccess({
        meditations: [meditationMock],
      }),
    );

    expect(result.meditations[0].id).toBe(meditationMock.id);
    expect(result.isMeditationsError).toBe(false);
    expect(result.isMeditationsLoading).toBe(false);
    expect(result.isMeditationsLoaded).toBe(true);
  });
});
