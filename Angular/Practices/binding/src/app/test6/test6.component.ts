import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test6',
  template: `
    <h2>test 6</h2>
    <h2>Template Reference Variables</h2>
    <input #myInput type="text" />
    <button (click)="logMessage(myInput.value)">Log</button>
  `,
  styles: [],
})
export class Test6Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  logMessage(value: any) {
    console.log(value);
  }
}
