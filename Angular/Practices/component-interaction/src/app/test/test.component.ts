import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>test</h2>
    <h2>Component Interaction</h2>
    <h2>Parent to child (app to test)</h2>
    <h2>{{ 'Hello ' + parentData1 }}</h2>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  constructor() {}
  @Input() public parentData1 = '';
  ngOnInit(): void {}
}
