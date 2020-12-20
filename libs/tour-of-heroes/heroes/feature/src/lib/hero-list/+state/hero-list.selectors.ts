import { createSelector } from '@ngrx/store';

// prettier-ignore
import { getHeroesState,heroEntities, heroIds, loaded, loading } from '../../+state/heroes.selectors';

const getHeroIds = createSelector(getHeroesState, heroIds);
const getHeroEntities = createSelector(getHeroesState, heroEntities);
const getHeroes = createSelector(getHeroIds, getHeroEntities, (ids: number[], entities) =>
  ids.map(id => entities[id])
);
const getHeroesLoaded = createSelector(getHeroesState, loaded);
const getHeroesLoading = createSelector(getHeroesState, loading);

export const heroListSelectors = {
  getHeroes,
  getHeroesLoaded,
  getHeroesLoading
};
