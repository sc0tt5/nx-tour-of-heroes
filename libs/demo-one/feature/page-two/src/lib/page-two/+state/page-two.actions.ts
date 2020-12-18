import { createAction, props } from '@ngrx/store';

import { PageTwo } from '@nx-toh/shared/models';

// load products
export const loadPageTwo = createAction('[PageTwo] Load PageTwo', props<{ param: string }>());
export const loadPageTwoFail = createAction('[PageTwo] Load PageTwo Fail', props<{ error: any }>());
export const loadPageTwoSuccess = createAction(
  '[PageTwo] Load PageTwo Success',
  props<{ page: PageTwo }>()
);
export const initializePageTwo = createAction('[PageTwo] Initialize PageTwo');
