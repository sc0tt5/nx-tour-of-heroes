import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Page } from '@nx-demo/shared/models';
import * as PageOneAction from './page-one.actions';

export interface PageOneState extends EntityState<Page> {
  selectedPageOneId: string | null;
  loaded: boolean;
  loading: boolean;
}

// ngrx/entity adapter
export const adapter: EntityAdapter<Page> = createEntityAdapter<Page>({
  selectId: (pageOne: Page) => pageOne.param,
  sortComparer: false
});

export const initialState: PageOneState = adapter.getInitialState({
  selectedPageOneId: null,
  loaded: false,
  loading: false
});

export const pageOneReducer = createReducer(
  initialState,

  // load pageOnes
  on(PageOneAction.loadPageOne, state => ({ ...state, loading: true })),
  on(PageOneAction.loadPageOneSuccess, (state, payload) =>
    adapter.addOne(payload.page, { ...state, loading: false, loaded: true })
  ),
  on(PageOneAction.loadPageOneFail, state => ({ ...state, loading: false, loaded: false })),

  // reset
  on(PageOneAction.resetPageOneState, state => ({
    ...state,
    selectedPageOneId: null
  }))
);

export function reducer(state: PageOneState | undefined, action: Action) {
  return pageOneReducer(state, action);
}

// selectors
export const getPageOneEntities = (state: PageOneState) => state.entities;
export const getPageOneLoading = (state: PageOneState) => state.loading;
export const getPageOneLoaded = (state: PageOneState) => state.loaded;
export const getPageOne = (state: PageOneState) => state.entities[state.selectedPageOneId];

// get the selectors
// const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// feature
export const getPageOneState = createFeatureSelector<PageOneState>('pageOne');
