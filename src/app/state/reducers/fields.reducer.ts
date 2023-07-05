import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.interface';
import { addBusinessName, addName, addPhone } from '../actions/fields.actions';

export const initialState: Readonly<User> = {
  name: '',
  businessName: '',
  phone: '',
};

export const fieldReducer = createReducer(
  initialState,
  on(addName, (state, { name }) => {
    return { ...state, name };
  }),
  on(addBusinessName, (state, { businessName }) => {
    return { ...state, businessName };
  }),
  on(addPhone, (state, { phone }) => {
    return { ...state, phone };
  })
);
