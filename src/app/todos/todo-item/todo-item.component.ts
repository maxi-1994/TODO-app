import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/app.state';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() public todo!: Todo;
  @ViewChild('input') input!: ElementRef;
  public checkCompleted!: FormControl;
  public textInput!: FormControl;
  public editing!: boolean;

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  edit(): void {
    this.editing = true;
    this.textInput.setValue(this.todo.text);

    setTimeout(() => {
      this.input.nativeElement.select();
    }, 1);
  }

  deleteTodo(): void {
    this.store.dispatch(actions.deleteTodo({ id: this.todo.id }));
  }

  finishEdition(): void {
    this.editing =  false;

    if(this.textInput.invalid) { return; }
    if(this.textInput.value === this.todo.text) { return; }

    this.store.dispatch(actions.editTodo({ id: this.todo.id, text: this.textInput.value }));
  }

}
