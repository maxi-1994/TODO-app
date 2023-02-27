import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { appState } from 'src/app/app.state';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  public textForm: FormGroup;
  
  constructor(private fb: FormBuilder,
              private store: Store<appState>) {
    this.textForm = this.fb.group({
      txtInput: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  add(): void {
    if(this.textForm.invalid) {
      return
    }
    let textValue = this.textForm.get('txtInput')?.value;
    this.store.dispatch(actions.create({ text: textValue }));
    this.textForm.reset();
  }

}
