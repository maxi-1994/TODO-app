import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const todoState: Todo[] = [
    new Todo('Ecografia 18hs'),
    new Todo('Comprar milangas'),
    new Todo('Leer libro'),
];

export const todoReducer = createReducer(
    todoState,
    on(actions.create, (state, props) => [...state, new Todo(props.text)]),

    on(actions.editTodo, (state, props) => {
        return state.map( todo => {
            if(todo.id === props.id) {
                return {
                    ...todo,
                    text: props.text
                }
            } else {
                return todo;
            }
        });
    }),

    on(actions.deleteTodo, (state, props) => {
        return state.filter(todo => todo.id !== props.id);
    }),

    on(actions.clearAllTodos, (state) => {
        return state.filter(todo => !todo.completed);
    }),

    on(actions.toggle, (state, props) => {
        return state.map( todo => {
            if(todo.id === props.id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo;
            }
        });
    }),

    on(actions.toggleAll, (state, props) => {
        return state.map( todo => {
            return {
                ...todo,
                completed: props.completed
            }
        });
    }),
);