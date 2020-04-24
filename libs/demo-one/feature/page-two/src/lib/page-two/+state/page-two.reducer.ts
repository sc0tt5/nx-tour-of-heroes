import { Action, createReducer, on } from '@ngrx/store';
import { PageTwo } from '@nx-demo/shared/models';
import * as PageTwoAction from './page-two.actions';

export interface PageTwoState {
  page: PageTwo;
  loading: boolean;
  loaded: boolean;
}

export const initialState: PageTwoState = {
  page: null,
  loaded: false,
  loading: false
};

const reducer = createReducer(
  initialState,
  on(PageTwoAction.loadPageTwo, state => ({ ...state, loading: true, loaded: false })),
  on(PageTwoAction.loadPageTwoSuccess, (state, payload) => ({
    ...state,
    page: payload.page,
    loading: false,
    loaded: !!payload.page // only true if not empty
  })),
  on(PageTwoAction.loadPageTwoFail, state => ({
    ...state,
    page: initialState.page,
    loading: false,
    loaded: false
  })),
  on(PageTwoAction.initializePageTwo, state => initialState)
);

export function pageTwoReducer(state: PageTwoState | undefined, action: Action): PageTwoState {
  return reducer(state, action);
}
