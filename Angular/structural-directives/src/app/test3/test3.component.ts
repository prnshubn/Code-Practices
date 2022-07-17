import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  template: `
    <h2>test 3</h2>
    <h2>ngIf with then and else</h2>
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>
      <h2>Priyanshu</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>Hidden</h2>
    </ng-template>
  `,
  styles: [],
})
export class Test3Component implements OnInit {
  constructor() {}
  public displayName = false;
  ngOnInit(): void {}
}
