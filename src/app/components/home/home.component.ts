import { AppState } from '../../interfaces/counter';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';


import { INCREMENT, DECREMENT, RESET } from '../../../reducer/counter';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {





 



  counter: Observable<number>;


	constructor(private store: Store<AppState>){
		this.counter = store.select('counter');
}

 ngOnInit() {
  }

	increment(){
		this.store.dispatch({ type: INCREMENT });
}

decrement()
{
this.store.dispatch({ type: DECREMENT });
}


	reset(){
		this.store.dispatch({ type: RESET });
}
}
