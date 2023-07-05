import { ActionReducerMap } from '@ngrx/store';
import { imageReducer } from './reducers/images.reducer';
import { User } from '../models/user.interface';
import { fieldReducer } from './reducers/fields.reducer';

export interface AppState {
  images: ReadonlyArray<number>;
  fields: Readonly<User>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  images: imageReducer,
  fields: fieldReducer,
};
