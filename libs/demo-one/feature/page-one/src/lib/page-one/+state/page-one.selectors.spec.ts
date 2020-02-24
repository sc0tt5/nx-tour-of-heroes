import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Page } from '@nx-demo/shared/models';
import { initialState, PageOneState } from './page-one.reducer';
import { getPageOne, getPageOneLoaded, getPageOneLoading } from './page-one.selectors';

describe('PageOne Selectors', () => {
  let store: MockStore<PageOneState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })]
    });

    store = TestBed.get(Store);
  });

  describe('getPageOne', () => {
    it('should return page one', () => {
      const pageOne: Page = {
        param: 'page-one',
        name: 'Page 1',
        content: 'Page 1 content...',
        accordionItems: [
          { header: 'header 1', content: 'content 1' },
          { header: 'header 2', content: 'content 2' },
          { header: 'header 3', content: 'content 3' }
        ]
      };

      store.setState({ page: pageOne, loaded: true, loading: false });

      console.log({ initialState });
      // const state =  { ...initialState, page: pageOne };
      const slice = store.select(getPageOne);

      expect(slice).toEqual(pageOne);
    });
  });

  describe('getPageOneLoaded', () => {
    it('should return loaded', () => {
      const state = { ...initialState, loaded: true };
      const slice = getPageOneLoaded(state);

      expect(slice).toEqual(true);
    });
  });

  describe('getPageOneLoading', () => {
    it('should return loading', () => {
      const state = { ...initialState, loading: true };
      const slice = getPageOneLoading(state);

      expect(slice).toEqual(true);
    });
  });
});
