import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { appState } from 'src/app/app.state';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.css']
})
export class TodoItemListComponent implements OnInit {

  public todosList: Todo[] = [];
  public currentFilter!: string;

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
    // this.store.select('todo').subscribe(todos => {
    //   this.todosList = todos;
    // });

    this.store.subscribe(({ todo, filter }) => {
      this.todosList = todo;
      this.currentFilter = filter;
    });
  }

}
