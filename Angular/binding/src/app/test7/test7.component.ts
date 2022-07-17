import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test7',
  template: `
    <h2>test 7</h2>
    <h2>Two way binding</h2>
    <input [(ngModel)]="name" type="text" />{{ name }}
  `,
  styles: [],
})
export class Test7Component implements OnInit {
  constructor() {}
  public name = '';
  ngOnInit(): void {}
}
