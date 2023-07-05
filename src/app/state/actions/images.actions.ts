import { createAction, props } from '@ngrx/store';
import { Image } from '../../models/image.interface';

export const addImage = createAction(
  '[Image Component] Add',
  props<{ image: Image }>()
);
