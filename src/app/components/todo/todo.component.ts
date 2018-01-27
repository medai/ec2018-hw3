import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit {

  addSuccess: boolean = false;
  addError  : boolean = false;
  todos     : any;
  todo = {
    completed: false,
    title:     ''
  };


  constructor(
    public todoService: TodoDataService
  ) { }


  ngOnInit() {
    this.todoService.getTodos().subscribe(todosOll =>{
      console.log(todosOll);
      this.todos = todosOll;
    }, error => {
      console.log(error);
    });
  }

  addTodo(form){
    this.todoService.addTodo(this.todo).subscribe( todo =>{
      console.log(todo);

      this.todos.unshift(todo);
      form.resetForm();

      this.addSuccess = true;

      setTimeout(() => {
        this.addSuccess = false;
      }, 2000);

    }, error => {
      console.log(error);
      this.addError = true;

      setTimeout(() => {
        this.addError = false;
      }, 2000);
    });
  }

}
