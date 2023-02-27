/* 
Este archivo indica como se encuentra el estado global de la aplicación.
En este caso solo hay un único state pero puedo haber varios.

export interface appState {
    todo: Todo[];
    users: Array<string>;
    products: Array<string>;
}
*/

import { Todo } from "./todos/models/todo.model";

export interface appState {
    todo: Todo[];
};