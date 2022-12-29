import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Hero } from '@nx-toh/shared/models';

// action constants
const CREATE_HERO = '[Hero Detail] Create Hero';
const CREATE_HERO_FAIL = '[Hero Detail] Create Hero Fail';
const CREATE_HERO_SUCCESS = '[Hero Detail] Create Hero Success';
const LOAD_HERO = '[Hero Detail] Load Hero';
const LOAD_HERO_FAIL = '[Hero Detail] Load Hero Fail';
const LOAD_HERO_SUCCESS = '[Hero Detail] Load Hero Success';
const RESET_SELECTED_HERO_ID = '[Hero Detail] Reset Selected Hero Id';
const SELECT_HERO_ID = '[Hero Detail] Select Hero Id';
const UPDATE_HERO = '[Hero Detail] Update Hero';
const UPDATE_HERO_FAIL = '[Hero Detail] Update Hero Fail';
const UPDATE_HERO_SUCCESS = '[Hero Detail] Update Hero Success';

// actions
const createHero = createAction(CREATE_HERO, props<{ hero: Hero }>());
const createHeroFail = createAction(CREATE_HERO_FAIL, props<{ error: unknown }>());
const createHeroSuccess = createAction(CREATE_HERO_SUCCESS, props<{ hero: Update<Hero> }>());
const loadHero = createAction(LOAD_HERO, props<{ id: number }>());
const loadHeroFail = createAction(LOAD_HERO_FAIL, props<{ error: unknown }>());
const loadHeroSuccess = createAction(LOAD_HERO_SUCCESS, props<{ hero: Hero }>());
const resetSelectedHeroId = createAction(RESET_SELECTED_HERO_ID);
const selectHeroId = createAction(SELECT_HERO_ID, props<{ id: number }>());
const updateHero = createAction(UPDATE_HERO, props<{ hero: Hero }>());
const updateHeroFail = createAction(UPDATE_HERO_FAIL, props<{ error: unknown }>());
const updateHeroSuccess = createAction(UPDATE_HERO_SUCCESS, props<{ hero: Update<Hero> }>());

// public
export const heroDetailActions = {
  createHero,
  createHeroFail,
  createHeroSuccess,
  loadHero,
  loadHeroFail,
  loadHeroSuccess,
  resetSelectedHeroId,
  selectHeroId,
  updateHero,
  updateHeroFail,
  updateHeroSuccess
};
