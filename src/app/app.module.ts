import { appRoutes } from './routes/navigation-routing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../reducer/counter';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';

import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({ counter: counterReducer }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
