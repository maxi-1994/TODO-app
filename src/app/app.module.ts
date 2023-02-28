import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TodosModule } from './todos/todos.module';
import { appReducers } from './app.state';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodosModule,
    StoreModule.forRoot(appReducers), // StoreModule.forRoot({ todo: todoReducer, filter: filterReducer }) - Se recomienda tener el app.module lo más limpio posible. Para que sea más facil de mantene por eso se importa el appReducers del app.state donde estan centralizados todos los reducers. 
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
