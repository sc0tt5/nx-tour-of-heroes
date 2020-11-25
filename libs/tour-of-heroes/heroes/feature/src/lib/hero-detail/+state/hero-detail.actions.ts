import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Hero } from '@nx-demo/shared/models';

const LOAD_HERO = '[Hero Detail] Load Hero';
const LOAD_HERO_FAIL = '[Hero Detail] Load Hero Fail';
const LOAD_HERO_SUCCESS = '[Hero Detail] Load Hero Success';
const REMOVE_HERO = '[Hero Detail] Remove Hero';
const REMOVE_HERO_FAIL = '[Hero Detail] Remove Hero Fail';
const REMOVE_HERO_SUCCESS = '[Hero Detail] Remove Hero Success';
const RESET_HERO_STATE = '[Hero Detail] Reset Selected Hero';
const SELECT_HERO_ID = '[Hero Detail] Select Hero Id';
const UPDATE_HERO = '[Hero Detail] Update Hero';
const UPDATE_HERO_FAIL = '[Hero Detail] Update Hero Fail';
const UPDATE_HERO_SUCCESS = '[Hero Detail] Update Hero Success';

// todo: createHero

const loadHero = createAction(LOAD_HERO, props<{ id: number }>());
const loadHeroFail = createAction(LOAD_HERO_FAIL, props<{ error: any }>());
const loadHeroSuccess = createAction(LOAD_HERO_SUCCESS, props<{ hero: Hero }>());
const removeHero = createAction(REMOVE_HERO, props<{ id: number }>());
const removeHeroFail = createAction(REMOVE_HERO_FAIL, props<{ error: any }>());
const removeHeroSuccess = createAction(REMOVE_HERO_SUCCESS, props<{ id: number }>()); // todo: this should be HttpResponse ???
const resetHeroState = createAction(RESET_HERO_STATE);
const selectHeroId = createAction(SELECT_HERO_ID, props<{ id: number }>());
const updateHero = createAction(UPDATE_HERO, props<{ hero: Hero }>());
const updateHeroFail = createAction(UPDATE_HERO_FAIL, props<{ error: any }>());
const updateHeroSuccess = createAction(UPDATE_HERO_SUCCESS, props<{ hero: Update<Hero> }>());

export const heroDetailActions = {
  loadHero,
  loadHeroFail,
  loadHeroSuccess,
  removeHero,
  removeHeroFail,
  resetHeroState,
  removeHeroSuccess,
  selectHeroId,
  updateHero,
  updateHeroFail,
  updateHeroSuccess
};
