import { createSelector } from '@ngrx/store';

import { heroesSelectors } from '../../+state/heroes.selectors';
import { HeroesState } from '../../+state/heroes.state';

// projectors
const selectedHero = (state: HeroesState) => state.entities[state.selectedHeroId];

// selectors
const getSelectedHero = createSelector(heroesSelectors.getHeroesState, selectedHero);

export const heroDetailSelectors = { getSelectedHero };
