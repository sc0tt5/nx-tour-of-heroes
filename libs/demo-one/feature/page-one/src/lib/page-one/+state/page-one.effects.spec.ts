// kudos: https://dev.to/jdpearce/how-to-test-five-common-ngrx-effect-patterns-26cb
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PageOne } from '@nx-demo/shared/models';
import { cold, hot } from 'jest-marbles';
import { Observable, of, throwError } from 'rxjs';
import { PageOneService } from '../page-one.service';
import * as PageOneAction from './page-one.actions';
import { PageOneEffects } from './page-one.effects';
import { initialState, PageOneState } from './page-one.reducer';

describe('PageOneEffects', () => {
  let actions: Observable<Action>;

  // effects under test
  let effects: PageOneEffects;
  let metadata: EffectsMetadata<PageOneEffects>;

  // providers
  let service: PageOneService;
  let store: MockStore<PageOneState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [
        PageOneEffects,
        PageOneService,
        provideMockActions(() => actions),
        provideMockStore({ initialState })
      ]
    });

    effects = TestBed.inject(PageOneEffects);
    metadata = getEffectsMetadata(effects);
    service = TestBed.inject(PageOneService);
    store = TestBed.inject(Store) as MockStore<PageOneState>;
  }));

  describe('loadPage$', () => {
    it('should get the items and emit when the service call is successful', () => {
      // set up the initial action that triggers the effect
      const action = PageOneAction.loadPageOne({ param: 'page-one' });

      // set up our dummy list of things to return
      // (we could create real things here if necessary)
      const page: PageOne = { name: null, content: null, param: null, accordionItems: [] };

      // spy on the service call and return our dummy list
      jest.spyOn(service, 'read').mockReturnValue(of(page));

      // set up our action list
      actions = hot('a', { a: action });

      // check that the observable output of the effect is what we expect it to be
      expect(effects.loadPage$).toBeObservable(
        cold('a', { a: PageOneAction.loadPageOneSuccess({ page }) })
      );
    });

    it('should emit an error action when the service call is unsuccessful', () => {
      // set up the initial action that triggers the effect
      const action = PageOneAction.loadPageOne({ param: 'page-one' });

      const error = 1;

      // spy on the service call and return an error this time
      spyOn(service, 'read').and.returnValue(throwError({ error }));

      // set up our action list
      actions = hot('a', { a: action });

      // check that the output of the effect is what we expect it to be
      expect(effects.loadPage$).toBeObservable(
        cold('a', { a: PageOneAction.loadPageOneFail({ error }) })
      );
    });
  });
});
