// kudos: https://dev.to/jdpearce/how-to-test-five-common-ngrx-effect-patterns-26cb
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jest-marbles';
import { Observable, of, throwError } from 'rxjs';

import { Hero } from '@nx-demo/shared/models';

import { HeroesService } from '../services/heroes.service';
import * as HeroesAction from './heroes.actions';
import { HeroesEffects } from './heroes.effects';
import { HeroesState, initialState } from './heroes.reducer';

describe('HeroesEffects', () => {
  let actions: Observable<Action>;

  // effects under test
  let effects: HeroesEffects;
  let metadata: EffectsMetadata<HeroesEffects>;

  // providers
  let service: HeroesService;
  let store: MockStore<HeroesState>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule, HttpClientTestingModule],
        providers: [
          HeroesEffects,
          HeroesService,
          provideMockActions(() => actions),
          provideMockStore({ initialState })
        ]
      });

      effects = TestBed.inject(HeroesEffects);
      metadata = getEffectsMetadata(effects);
      service = TestBed.inject(HeroesService);
      store = TestBed.inject(Store) as MockStore<HeroesState>;
    })
  );

  describe('loadPage$', () => {
    it('should get the items and emit when the service call is successful', () => {
      // set up the initial action that triggers the effect
      const action = HeroesAction.loadHeroes();

      // set up our dummy list of things to return
      // (we could create real things here if necessary)
      const heroes: Hero[] = [{ id: null, name: null, description: null }];

      // spy on the service call and return our dummy list
      jest.spyOn(service, 'read').mockReturnValue(of(heroes));

      // set up our action list
      actions = hot('a', { a: action });

      // check that the observable output of the effect is what we expect it to be
      expect(effects.loadPage$).toBeObservable(
        cold('a', { a: HeroesAction.loadHeroesSuccess({ heroes }) })
      );
    });

    it('should emit an error action when the service call is unsuccessful', () => {
      // set up the initial action that triggers the effect
      const action = HeroesAction.loadHeroes();

      const error = 1;

      // spy on the service call and return an error this time
      spyOn(service, 'read').and.returnValue(throwError({ error }));

      // set up our action list
      actions = hot('a', { a: action });

      // check that the output of the effect is what we expect it to be
      expect(effects.loadPage$).toBeObservable(
        cold('a', { a: HeroesAction.loadHeroesFail({ error }) })
      );
    });
  });
});
