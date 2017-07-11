import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'myCounterComponent',
  template: `
    <button (click)="decrement()">-</button>
    <span>{{counterValue}}</span>
    <button (click)="increment()">+</button>

  `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Input('ComponetCounterValue') private counterValue: number;
   @Output() counterChange:EventEmitter<number>;


  constructor() {
    this.counterChange=new EventEmitter();
  }

  increment() {
    this.counterValue += 1;
    this.counterChange.emit(this.counterValue);
  }

  decrement() {
    this.counterValue -= 1;
    this.counterChange.emit(this.counterValue);
  }


  ngOnInit() {
    this.counterChange.emit(this.counterValue);
  }

}
