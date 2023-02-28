import { createAction, props } from '@ngrx/store';

// export type filtersType = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
    '[Filter] Set Filter',
    props<{ filter: string }>()
);