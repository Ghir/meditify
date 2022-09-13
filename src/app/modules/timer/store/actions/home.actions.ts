import { createAction, props } from '@ngrx/store';

export const setDuration = createAction(
  '[Timer | Timer Page] Set Duration',
  props<{ duration: number }>(),
);
