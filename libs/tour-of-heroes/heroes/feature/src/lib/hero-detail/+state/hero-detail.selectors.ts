import { createSelector } from '@ngrx/store';

import { getHeroesState, loaded, loading, selectedHero } from '../../+state/heroes.selectors';

const getHeroLoaded = createSelector(getHeroesState, loaded);
const getHeroLoading = createSelector(getHeroesState, loading);
const getSelectedHero = createSelector(getHeroesState, selectedHero);

export const heroDetailSelectors = {
  getHeroLoaded,
  getHeroLoading,
  getSelectedHero
};
