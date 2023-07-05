import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectImages =
  createFeatureSelector<ReadonlyArray<number>>('images');
