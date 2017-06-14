import { HomeComponent } from '../components/home/home.component';
import { CounterComponent } from '../components/counter/counter.component';
import { Routes } from '@angular/router';



export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter',   component:CounterComponent  },

];