import { createAction, props } from '@ngrx/store';

import { Hero } from '@nx-demo/shared/models';

// hero detail actions
const LOAD_HERO = '[Hero Detail] Load Hero';
const LOAD_HERO_FAIL = '[Hero Detail] Load Hero Fail';
const LOAD_HERO_SUCCESS = '[Hero Detail] Load Hero Success';
const RESET_HERO_STATE = '[Hero Detail] Reset Selected Hero';
const SELECT_HERO_ID = '[Hero Detail] Select Hero Id';

// load one hero
const loadHero = createAction(LOAD_HERO, props<{ id: number }>());
const loadHeroFail = createAction(LOAD_HERO_FAIL, props<{ error: any }>());
const loadHeroSuccess = createAction(LOAD_HERO_SUCCESS, props<{ hero: Hero }>());

// active hero
const selectHeroId = createAction(SELECT_HERO_ID, props<{ id: number }>());

// todo: create hero
// todo: update hero
// todo: remove hero

// reset selected hero
const resetHeroState = createAction(RESET_HERO_STATE);

export const heroDetailActions = {
  loadHero,
  loadHeroFail,
  loadHeroSuccess,
  selectHeroId,
  resetHeroState
};
