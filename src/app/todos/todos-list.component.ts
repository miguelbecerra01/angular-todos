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
    todos: Todo[];
    todosDone: Todo[];
    haveTodosNotDone: boolean = false;

    private subscription: Subscription;

    constructor(private todoService: TodosService) { }

    ngOnInit() {
        console.log('init');
        this.todos = this.todoService.getAllTodosNotDone();
        this.todosDone = this.todoService.getAllTodosDone();

        this.haveTodosNotDone = this.todos.length > 0;

        this.subscription = this.todoService.todosChanged.subscribe(() => {

            this.todos = this.todoService.getAllTodosNotDone();
            this.todosDone = this.todoService.getAllTodosDone();

            this.haveTodosNotDone = this.todos.length > 0;

        });
    }

    onCompleteTodo(todo: Todo) {
        this.todoService.completeTodo(todo);
    }

    onDeleteTodo(todoDone: Todo) {
        this.todoService.deleteTodo(todoDone.id);
    }
}