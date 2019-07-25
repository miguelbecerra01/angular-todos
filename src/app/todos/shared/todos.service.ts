import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosService {
    todosChanged = new Subject<Todo[]>();

    todos: Todo[] = [
        new Todo('Init the project', false),
        new Todo('Learn how to code it', false),
        new Todo('Build it!', false),
        new Todo('Commit the code', true),
        new Todo('Use it! and relax', false),
    ];

    getAllTodosNotDone() {
        return this.todos.filter(todo => todo.done === false);
    }

    getAllTodosDone() {
        return this.todos.filter(todo => todo.done === true);
    }

    async addTodo(todo: Todo) {
        this.todos.push(todo);
        this.todosChanged.next(this.todos);
    }

    async completeTodo(todo: Todo) {
        var index = this.todos.findIndex(_todo => _todo.id === todo.id);
        this.todos[index].done = true;
        this.todosChanged.next(this.todos);
    }
    async deleteTodo(id: string) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.todosChanged.next(this.todos);
    }
}