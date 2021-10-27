import { createFeatureSelector } from '@ngrx/store';

// Store
import { MeditationState } from '@meditation/store/reducers/meditation.reducer';

// Reducers
import { reducer } from '@meditation/store/reducers/meditation.reducer';

export const meditationFeatureKey = 'meditation';

export interface MeditationModuleState {
  meditation: MeditationState;
}

export const reducers = {
  meditation: reducer,
};

export const selectMeditationModuleState =
  createFeatureSelector<MeditationModuleState>(meditationFeatureKey);
