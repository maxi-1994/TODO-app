import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] Create',
    props<{text: string}>()
);

export const toggle = createAction(
    '[TODO] Toggle',
    props<{id: string}>()
);

export const editTodo = createAction(
    '[TODO] Edit',
    props<{id: string, text: string}>()
);

export const deleteTodo = createAction(
    '[TODO] deleteTodo',
    props<{id: string}>()
);

export const toggleAll = createAction(
    '[TODO] toggleAll',
    props<{completed: boolean}>()
);