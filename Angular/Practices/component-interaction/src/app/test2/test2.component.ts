import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <h2>test 2</h2>
    <h2>Component Interaction via alias</h2>
    <h2>Parent to child (app to test2)</h2>
    <h2>{{ 'Hello ' + name }}</h2>
  `,
  styles: [],
})
export class Test2Component implements OnInit {
  constructor() {}
  @Input('parentData2') public name = '';
  ngOnInit(): void {}
}
