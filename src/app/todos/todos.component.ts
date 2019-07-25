import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html'
})
export class TodosComponent {

    constructor(private router: Router) {

    }

    onCreateTodo() {
        this.router.navigate(['create']);
    }
}