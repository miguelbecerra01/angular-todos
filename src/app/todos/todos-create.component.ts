import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from './shared/todo.model';
import { TodosService } from './shared/todos.service';

@Component({
    selector: 'app-todos-create',
    templateUrl: './todos-create.component.html'
})
export class TodosCreateComponent {

    todoName: string;

    constructor(private todoService: TodosService, private router: Router) {

    }
    onSubmit() {
        this.todoService.addTodo(new Todo(this.todoName, false)).then(todos => {
            this.router.navigate(['']);
        });
    }
}