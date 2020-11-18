import { createAction, props } from '@ngrx/store';

import { Hero } from '@nx-demo/shared/models';

export const loadHeroes = createAction('[Heroes] Load Heroes');
export const loadHeroesFail = createAction('[Heroes] Load Heroes Fail', props<{ error: any }>());
export const loadHeroesSuccess = createAction(
  '[Heroes] Load Heroes Success',
  props<{ heroes: Hero[] }>()
);
export const resetHeroesState = createAction('[Heroes] Initialize Heroes');
