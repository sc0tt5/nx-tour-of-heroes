import { createSelector } from '@ngrx/store';

import { heroesSelectors } from '../heroes.selectors';
import { HeroesState } from '../heroes.state';

// projectors
const selectedHero = (state: HeroesState) => state.entities[state.selectedHeroId];

// selectors
const getSelectedHero = createSelector(heroesSelectors.getHeroesState, selectedHero);

export const heroDetailSelectors = { getSelectedHero };
