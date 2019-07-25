import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './todos/todos.component';
import { TodosCreateComponent } from './todos/todos-create.component';

const appRoutes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'create', component: TodosCreateComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }