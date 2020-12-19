import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Hero } from '@nx-toh/shared/models';

const CREATE_HERO = '[Hero Detail] Create Hero';
const CREATE_HERO_FAIL = '[Hero Detail] Create Hero Fail';
const CREATE_HERO_SUCCESS = '[Hero Detail] Create Hero Success';
const LOAD_HERO = '[Hero Detail] Load Hero';
const LOAD_HERO_FAIL = '[Hero Detail] Load Hero Fail';
const LOAD_HERO_SUCCESS = '[Hero Detail] Load Hero Success';
const RESET_HERO_STATE = '[Hero Detail] Reset Selected Hero';
const UPDATE_HERO = '[Hero Detail] Update Hero';
const UPDATE_HERO_FAIL = '[Hero Detail] Update Hero Fail';
const UPDATE_HERO_SUCCESS = '[Hero Detail] Update Hero Success';

const createHero = createAction(CREATE_HERO, props<{ hero: Hero }>());
const createHeroFail = createAction(CREATE_HERO_FAIL, props<{ error: any }>());
const createHeroSuccess = createAction(CREATE_HERO_SUCCESS, props<{ hero: Update<Hero> }>());
const loadHero = createAction(LOAD_HERO, props<{ id: number }>());
const loadHeroFail = createAction(LOAD_HERO_FAIL, props<{ error: any }>());
const loadHeroSuccess = createAction(LOAD_HERO_SUCCESS, props<{ hero: Hero }>());
const resetHeroState = createAction(RESET_HERO_STATE);
const updateHero = createAction(UPDATE_HERO, props<{ hero: Hero }>());
const updateHeroFail = createAction(UPDATE_HERO_FAIL, props<{ error: any }>());
const updateHeroSuccess = createAction(UPDATE_HERO_SUCCESS, props<{ hero: Update<Hero> }>());

export const heroDetailActions = {
  createHero,
  createHeroFail,
  createHeroSuccess,
  loadHero,
  loadHeroFail,
  loadHeroSuccess,
  resetHeroState,
  updateHero,
  updateHeroFail,
  updateHeroSuccess
};
