import { createAction, props } from '@ngrx/store';

import { Hero } from '@nx-demo/shared/models';

// hero list actions
const LOAD_HEROES = '[Hero List] Load Heroes';
const LOAD_HEROES_FAIL = '[Hero List] Load Heroes Fail';
const LOAD_HEROES_SUCCESS = '[Hero List] Load Heroes Success';
const SELECT_HERO = '[Hero List] Select Hero';

// load all heroes
const loadHeroes = createAction(LOAD_HEROES);
const loadHeroesFail = createAction(LOAD_HEROES_FAIL, props<{ error: any }>());
const loadHeroesSuccess = createAction(LOAD_HEROES_SUCCESS, props<{ heroes: Hero[] }>());
const selectHero = createAction(SELECT_HERO, props<{ id: number }>());

export const heroListActions = {
  loadHeroes,
  loadHeroesFail,
  loadHeroesSuccess,
  selectHero
};
