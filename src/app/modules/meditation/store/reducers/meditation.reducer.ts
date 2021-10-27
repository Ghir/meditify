import { Action, createReducer, on } from '@ngrx/store';

// Actions
import {
  loadCategoriesSuccess,
  loadMeditations,
  loadMeditationsFailure,
  loadMeditationsSuccess,
  loadCategories,
  loadCategoriesFailure,
} from '@meditation/store/actions/meditation.actions';

// Models
import { Meditation } from '@meditation/models/meditation.model';
import { Category } from '@meditation/models/category.model';

export interface MeditationState {
  // data
  meditations: Meditation[];
  categories: Category[];
  // state
  isCategoriesLoading: boolean;
  isCategoriesLoaded: boolean;
  isCategoriesError: boolean;
  isMeditationsLoading: boolean;
  isMeditationsLoaded: boolean;
  isMeditationsError: boolean;
}

export const initialState: MeditationState = {
  // data
  meditations: null,
  categories: null,
  // state
  isCategoriesLoading: false,
  isCategoriesLoaded: false,
  isCategoriesError: false,
  isMeditationsLoading: false,
  isMeditationsLoaded: false,
  isMeditationsError: false,
};

const meditationReducer = createReducer(
  initialState,

  on(
    loadCategories,
    (state): MeditationState => ({
      ...state,
      isCategoriesLoading: true,
      isCategoriesLoaded: false,
      isCategoriesError: false,
    }),
  ),

  on(
    loadCategoriesFailure,
    (state): MeditationState => ({
      ...state,
      isCategoriesLoading: false,
      isCategoriesLoaded: false,
      isCategoriesError: true,
    }),
  ),

  on(
    loadCategoriesSuccess,
    (state, { categories }): MeditationState => ({
      ...state,
      categories,
      isCategoriesLoading: false,
      isCategoriesLoaded: true,
      isCategoriesError: false,
    }),
  ),

  on(
    loadMeditations,
    (state): MeditationState => ({
      ...state,
      isMeditationsLoading: true,
      isMeditationsLoaded: false,
      isMeditationsError: false,
    }),
  ),

  on(
    loadMeditationsFailure,
    (state): MeditationState => ({
      ...state,
      isMeditationsLoading: false,
      isMeditationsLoaded: false,
      isMeditationsError: true,
    }),
  ),

  on(
    loadMeditationsSuccess,
    (state, { meditations }): MeditationState => ({
      ...state,
      meditations,
      isMeditationsLoading: false,
      isMeditationsLoaded: true,
      isMeditationsError: false,
    }),
  ),
);

export const reducer = (state: MeditationState | undefined, action: Action) =>
  meditationReducer(state, action);

// Data
export const meditationsData = (state: MeditationState) => state.meditations;
export const categoriesData = (state: MeditationState) => state.categories;
// State
export const categoriesLoadingState = (state: MeditationState) =>
  state.isCategoriesLoading;
export const categoriesLoadedState = (state: MeditationState) =>
  state.isCategoriesLoaded;
export const categoriesErrorState = (state: MeditationState) =>
  state.isCategoriesError;
export const meditationsLoadingState = (state: MeditationState) =>
  state.isMeditationsLoading;
export const meditationsLoadedState = (state: MeditationState) =>
  state.isMeditationsLoaded;
export const meditationsErrorState = (state: MeditationState) =>
  state.isMeditationsError;
