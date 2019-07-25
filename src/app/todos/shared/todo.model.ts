import { v4 as uuid } from 'uuid';

export class Todo {
    id: string;
    name: string;
    done: boolean;

    constructor(_name: string, _done: boolean) {
        this.id = uuid();
        this.name = _name;
        this.done = _done;
    }
}