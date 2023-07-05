import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.interface';

export const addName = createAction(
  '[Fields Component] Add Name',
  props<{ name: string }>()
);

export const addBusinessName = createAction(
  '[Fields Component] Add Business Name',
  props<{ businessName: string }>()
);

export const addPhone = createAction(
  '[Fields Component] Add Phone',
  props<{ phone: string }>()
);
