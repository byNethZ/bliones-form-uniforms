import { createReducer, on } from '@ngrx/store';
import { addImage } from '../actions/images.actions';
import { Image } from '../../models/image.interface';

export const initialState: ReadonlyArray<number> = [];

type Action = { image: Image };

export const imageReducer = createReducer(
  initialState,
  on(addImage, (state, { image }: Action) => {
    if (state.includes(image.id)) return state.filter((id) => id !== image.id);
    return [...state, image.id];
  })
);
