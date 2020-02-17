import { createAction, props } from '@ngrx/store';
import { Page } from '@nx-demo/shared/models';

// load products
export const loadPageOne = createAction('[PageOne] Load PageOne');
export const loadPageOneFail = createAction('[PageOne] Load PageOne Fail', props<{ error: any }>());
export const loadPageOneSuccess = createAction(
  '[PageOne] Load PageOne Success',
  props<{ page: Page }>()
);

// select product
export const selectPageOneId = createAction('[PageOne] Select PageOne', props<{ id: number }>());

// reset product
export const resetPageOneState = createAction('[PageOne] Reset PageOne State');
