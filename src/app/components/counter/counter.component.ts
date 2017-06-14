import { AppState } from '../../interfaces/counter';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit {

  counter: Observable<number>;


	constructor(private store: Store<AppState>){
		this.counter = store.select('counter');
}

  ngOnInit() {
  }

}
