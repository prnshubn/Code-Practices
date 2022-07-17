import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <h2>test 2</h2>
    <h2>Number Pipes</h2>
    <h2>{{ 5.678 | number: '1.2-3' }}</h2>
    <h2>{{ 5.678 | number: '3.4-5' }}</h2>
    <h2>{{ 5.678 | number: '3.1-2' }}</h2>
    <h2>{{ 0.25 | percent }}</h2>
    <h2>{{ 0.25 | currency }}</h2>
    <h2>{{ 0.25 | currency: 'INR' }}</h2>
    <h2>{{ 0.25 | currency: 'INR':'code' }}</h2>
  `,
  styles: [],
})
export class Test2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
