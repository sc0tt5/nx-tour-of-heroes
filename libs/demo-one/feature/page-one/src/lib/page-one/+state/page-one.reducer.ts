import { Action, createReducer, on } from '@ngrx/store';
import { Page } from '@nx-demo/shared/models';
import * as PageOneAction from './page-one.actions';

export interface PageOneState {
  page: Page;
  loading: boolean;
  loaded: boolean;
}

export const initialState: PageOneState = {
  page: null,
  loaded: false,
  loading: false
};

const reducer = createReducer(
  initialState,
  on(PageOneAction.loadPageOne, state => ({ ...state, loading: true, loaded: false })),
  on(PageOneAction.loadPageOneSuccess, (state, payload) => ({
    ...state,
    page: payload.page,
    loading: false,
    loaded: !!payload.page // only true if not empty
  })),
  on(PageOneAction.loadPageOneFail, state => ({
    ...state,
    page: initialState.page,
    loading: false,
    loaded: false
  })),
  on(PageOneAction.initializePageOne, state => initialState)
);

export function pageOneReducer(state: PageOneState | undefined, action: Action): PageOneState {
  return reducer(state, action);
}
