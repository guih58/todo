import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/to.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos: Todo[] = [];
  public title: String = "Minha tarefas";
  public form: FormGroup;
  

  constructor(private fb: FormBuilder) {
    this.form= this.fb.group({
      titulo: ['' , Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])],
      
      
    })
    this.todos.push( new Todo(1 , "Matheus Guilherme " ,false))
    this.todos.push( new Todo(2 , "Matheus Guilherme " ,false))
    this.todos.push( new Todo(3 , "Matheus Guilherme " ,true))
  
  }
  remove(todo: Todo){
  const index = this.todos.indexOf(todo)
  if(index != -1){
    this.todos.splice(index, 1)
  }

  }
  markAsDone(todo: Todo){
    todo.done = true;
  }
  markAsUnDone(todo: Todo){
    todo.done = false;
  }
 
}
