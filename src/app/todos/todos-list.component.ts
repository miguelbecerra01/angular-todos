import { Component, OnInit } from '@angular/core';
import { Todo } from './shared/todo.model';
import { TodosService } from './shared/todos.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
    todosNotDone: Todo[];
    todosDone: Todo[];
    areAllTodosDone: boolean = false;

    private subscription: Subscription;

    constructor(private todoService: TodosService) { }

    ngOnInit() {
        console.log('init');
        this.todosNotDone = this.todoService.getAllTodosNotDone();
        this.todosDone = this.todoService.getAllTodosDone();

        this.subscription = this.todoService.todosChanged.subscribe(() => {

            this.todosNotDone = this.todoService.getAllTodosNotDone();
            this.todosDone = this.todoService.getAllTodosDone();

        });
    }

    onCompleteTodo(todo: Todo) {
        this.todoService.completeTodo(todo);
    }

    onDeleteTodo(todoDone: Todo) {
        this.todoService.deleteTodo(todoDone.id);
    }
}