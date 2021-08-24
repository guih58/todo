import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];
  public title: String = "Minha tarefas"
  
  
  constructor() {
    this.todos.push("Passar com matheus")
    this.todos.push("Passar com matheus")
    this.todos.push("Passar com matheus")


    
  }
}
