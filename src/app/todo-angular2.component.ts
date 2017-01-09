import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
    moduleId: module.id,
    selector: 'todo-angular2-app',
    templateUrl: 'todo-angular2.component.html',
    styleUrls: ['todo-angular2.component.css'],
    providers: [TodoDataService]
})
export class TodoAngular2AppComponent {

    newTodo: Todo = new Todo();

    constructor(private todoDataService: TodoDataService) {};

    addTodo() {
        this.todoDataService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }

    toggleTodoComplete(todo) {
        this.todoDataService.toggleTodoComplete(todo);
    }

    removeTodo(todo) {
        this.todoDataService.deleteTodoById(todo.id);
    }

    get todos() {
        return this.todoDataService.getAllTodos();
    }    
}
