import { createFeatureSelector } from '@ngrx/store';

// Store
import { HomeState } from '@home/store/reducers/home.reducer';

// Reducer
import { reducer } from '@home/store/reducers/home.reducer';

export const homeFeatureKey = 'home';

export interface HomeModuleState {
  home: HomeState;
}

export const reducers = {
  home: reducer,
};

export const selectHomeModuleState =
  createFeatureSelector<HomeModuleState>(homeFeatureKey);
