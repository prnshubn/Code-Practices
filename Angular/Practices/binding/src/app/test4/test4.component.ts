import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  template: `
    <h2>test 4</h2>
    <h2>Style Binding</h2>
    <h2 [style.color]="'orange'">Style Binding 1</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 2</h2>
    <h2 [style.color]="highlightColor">Style Binding 3</h2>
    <h2 [ngStyle]="titleStyles">Style Binding 4</h2>
  `,
  styles: [],
})
export class Test4Component implements OnInit {
  constructor() {}
  public hasError = false;
  public highlightColor = 'orange';
  public titleStyles = {
    fontStyle: 'italic',
    color: 'blue',
  };
  ngOnInit(): void {}
}
