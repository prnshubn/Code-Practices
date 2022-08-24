import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <h2>test 2</h2>
    <h2>ngIf with else</h2>
    <h2 *ngIf="displayName; else elseBlock">Priyanshu 1</h2>
    <ng-template #elseBlock>
      <h2>Name is hidden</h2>
    </ng-template>
  `,
  styleUrls: [],
})
export class Test2Component implements OnInit {
  constructor() {}
  public displayName = false;
  ngOnInit(): void {}
}
