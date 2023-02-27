import { uid } from 'uid'

export class Todo {
    public id: string;
    public text: string;
    public completed: boolean;

    constructor(text: string) {
        this.id = uid();
        this.text = text;
        this.completed = false;
    }
}