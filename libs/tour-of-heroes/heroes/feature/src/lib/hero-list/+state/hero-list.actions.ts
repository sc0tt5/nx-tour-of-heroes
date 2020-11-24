import { createAction, props } from '@ngrx/store';

import { Hero } from '@nx-demo/shared/models';

// hero list actions
const LOAD_HEROES = '[Hero List] Load Heroes';
const LOAD_HEROES_FAIL = '[Hero List] Load Heroes Fail';
const LOAD_HEROES_SUCCESS = '[Hero List] Load Heroes Success';

// load all heroes
const loadHeroes = createAction(LOAD_HEROES);
const loadHeroesFail = createAction(LOAD_HEROES_FAIL, props<{ error: any }>());
const loadHeroesSuccess = createAction(LOAD_HEROES_SUCCESS, props<{ heroes: Hero[] }>());

export const heroListActions = {
  loadHeroes,
  loadHeroesFail,
  loadHeroesSuccess
};
