import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test3',
  template: `
    <h2>test 3</h2>
    <h2>Component Interaction</h2>
    <h2>Child to parent (test3 to app)</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styles: [],
})
export class Test3Component implements OnInit {
  constructor() {}
  @Output() public childEvent = new EventEmitter();
  fireEvent() {
    this.childEvent.emit('Hello Priyanshu');
  }
  ngOnInit(): void {}
}
