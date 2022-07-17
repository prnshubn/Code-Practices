import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>test</h2>
    <h2>ngIf</h2>
    <h2 *ngIf="true">Priyanshu 1</h2>
    <h2 *ngIf="displayName">Priyanshu 2</h2>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  constructor() {}
  public displayName = false;
  ngOnInit(): void {}
}
