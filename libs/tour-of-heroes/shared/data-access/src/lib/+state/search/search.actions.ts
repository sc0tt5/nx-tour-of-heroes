import { createAction, props } from '@ngrx/store';

import { Hero } from '@nx-toh/shared/models';

// action constants
const RESET_SEARCH_TERM = '[Hero Search] Reset Search Term';
const SEARCH_HEROES = '[Hero Search] Search Heroes';
const SEARCH_HEROES_FAIL = '[Hero Search] Search Heroes Fail';
const SEARCH_HEROES_SUCCESS = '[Hero Search] Search Heroes Success';
const SELECT_HERO = '[Hero Search] Select Hero';

// actions
const resetSearchTerm = createAction(RESET_SEARCH_TERM);
const searchHeroes = createAction(SEARCH_HEROES, props<{ name: string }>());
const searchHeroesFail = createAction(SEARCH_HEROES_FAIL, props<{ error: any }>());
const searchHeroesSuccess = createAction(SEARCH_HEROES_SUCCESS, props<{ heroes: Hero[] }>());
const selectHero = createAction(SELECT_HERO, props<{ id: number }>());

// public
export const heroSearchActions = {
  resetSearchTerm,
  searchHeroes,
  searchHeroesFail,
  searchHeroesSuccess,
  selectHero
};
