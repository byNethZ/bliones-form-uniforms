import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from 'src/app/models/user.interface';

export const selectUser = createFeatureSelector<Readonly<User>>('fields');
