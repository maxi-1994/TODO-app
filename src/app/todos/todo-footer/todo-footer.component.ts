import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/app.state';
import { setFilter } from 'src/app/filtros/filter.actions';
import { clearAllTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  public currentFilter!: string;
  public filtersList: Array<string> = ['all', 'pending', 'completed'];
  public pendingTasks: number = 0;

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendingTasks = state.todo.filter(todo => !todo.completed).length;
    });
  }

  changeFilter(selectedFilter: string): void {
    this.store.dispatch(setFilter({ filter: selectedFilter }));
  }

  clearAll(): void {
    this.store.dispatch(clearAllTodos());
  }

}
