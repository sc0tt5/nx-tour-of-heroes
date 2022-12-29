import { createAction, props } from '@ngrx/store';

import { Hero } from '@nx-toh/shared/models';

// action constants
const LOAD_HEROES = '[Hero List] Load Heroes';
const LOAD_HEROES_FAIL = '[Hero List] Load Heroes Fail';
const LOAD_HEROES_SUCCESS = '[Hero List] Load Heroes Success';
const REMOVE_HERO = '[Hero List] Remove Hero';
const REMOVE_HERO_FAIL = '[Hero List] Remove Hero Fail';
const REMOVE_HERO_SUCCESS = '[Hero List] Remove Hero Success';
const SELECT_HERO = '[Hero List] Select Hero';

// actions
const loadHeroes = createAction(LOAD_HEROES);
const loadHeroesFail = createAction(LOAD_HEROES_FAIL, props<{ error: unknown }>());
const loadHeroesSuccess = createAction(LOAD_HEROES_SUCCESS, props<{ heroes: Hero[] }>());
const removeHero = createAction(REMOVE_HERO, props<{ id: number }>());
const removeHeroFail = createAction(REMOVE_HERO_FAIL, props<{ error: unknown }>());
const removeHeroSuccess = createAction(REMOVE_HERO_SUCCESS, props<{ id: number }>());
const selectHero = createAction(SELECT_HERO, props<{ id: number }>());

// public
export const heroListActions = {
  loadHeroes,
  loadHeroesFail,
  loadHeroesSuccess,
  removeHero,
  removeHeroFail,
  removeHeroSuccess,
  selectHero
};
