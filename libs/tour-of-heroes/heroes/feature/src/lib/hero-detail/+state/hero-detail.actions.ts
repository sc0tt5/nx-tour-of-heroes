import { createAction, props } from '@ngrx/store';

import { Hero } from '@nx-demo/shared/models';

// hero detail actions
const LOAD_HERO = '[Hero Detail] Load Hero';
const LOAD_HERO_FAIL = '[Hero Detail] Load Hero Fail';
const LOAD_HERO_SUCCESS = '[Hero Detail] Load Hero Success';
const SELECT_HERO_ID = '[Hero Detail] Select Hero Id';

// load one hero
const loadHero = createAction(LOAD_HERO, props<{ id: number }>());
const loadHeroFail = createAction(LOAD_HERO_FAIL, props<{ error: any }>());
const loadHeroSuccess = createAction(LOAD_HERO_SUCCESS, props<{ hero: Hero }>());

const selectHeroId = createAction(SELECT_HERO_ID, props<{ id: number }>());

// todo: create new hero
// todo: update hero
// todo: remove hero

// reset selected hero
const resetHeroState = createAction('[Hero Detail] Reset Selected Hero');

export const heroDetailActions = {
  loadHero,
  loadHeroFail,
  loadHeroSuccess,
  selectHeroId,
  resetHeroState
};
