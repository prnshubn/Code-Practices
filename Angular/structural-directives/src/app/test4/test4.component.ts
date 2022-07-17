import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  template: `
    <h2>test 4</h2>
    <h2>ngSwitch</h2>
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>You are in default case</div>
    </div>
  `,
  styles: [],
})
export class Test4Component implements OnInit {
  constructor() {}
  public color = 'red';
  ngOnInit(): void {}
}
