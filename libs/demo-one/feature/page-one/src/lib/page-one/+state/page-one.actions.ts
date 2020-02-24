import { createAction, props } from '@ngrx/store';
import { Page } from '@nx-demo/shared/models';

// load products
export const loadPageOne = createAction('[PageOne] Load PageOne', props<{ param: string }>());
export const loadPageOneFail = createAction('[PageOne] Load PageOne Fail', props<{ error: any }>());
export const loadPageOneSuccess = createAction(
  '[PageOne] Load PageOne Success',
  props<{ page: Page }>()
);
export const initializePageOne = createAction('[PageOne] Initialize PageOne');