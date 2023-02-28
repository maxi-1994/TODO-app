import { createReducer, on } from '@ngrx/store';
import { setFilter } from './filter.actions';

export const initialState: string = 'all';

export const filterReducer = createReducer(
    initialState,
    on(setFilter, (state, { filter }) => filter)
  );