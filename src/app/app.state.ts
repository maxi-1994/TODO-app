/* 
Este archivo indica como se encuentra el estado global de la aplicación.
En este archivo se configuran todos los reducers de la aplicación.
*/

import { ActionReducerMap } from "@ngrx/store";
import { todoReducer } from "./todos/todo.reducer";
import { filterReducer } from "./filtros/filter.reducer";
import { Todo } from "./todos/models/todo.model";

export interface appState {
    todo: Todo[];
    filter: string;
};

export const appReducers: ActionReducerMap<appState> = {
    todo: todoReducer,
    filter: filterReducer
};