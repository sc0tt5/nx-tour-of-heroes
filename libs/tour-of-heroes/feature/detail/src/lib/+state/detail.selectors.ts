import { createSelector } from '@ngrx/store';

import { heroesSelectors, HeroesState } from '@nx-toh/tour-of-heroes/shared/data-access';

// projectors
const selectedHero = (state: HeroesState) => state.entities[state.selectedHeroId];

// selectors
const getSelectedHero = createSelector(heroesSelectors.getHeroesState, selectedHero);

export const heroDetailSelectors = { getSelectedHero };
