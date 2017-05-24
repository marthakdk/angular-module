// Creating just a simple e.g. counter component which will be re-used across the app so,
// we're creating this component under the hood of shared component


import { Component, EventEmitter,Input, Output} from '@angular/core';


@Component({
  selector: 'up-counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent {
   @Input()  count = 0;
   @Output() result = new EventEmitter<number>();
   increment() {
    this.count++;
    this.result.emit(this.count);
  }
  decrement() {
    this.count--;
    this.result.emit(this.count);
  }
}