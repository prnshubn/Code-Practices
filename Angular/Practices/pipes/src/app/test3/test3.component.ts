import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  template: `
    <h2>test 3</h2>
    <h2>Date Pipes</h2>
    <h2>{{ d }}</h2>
    <h2>{{ d | date: 'short' }}</h2>
    <h2>{{ d | date: 'shortDate' }}</h2>
    <h2>{{ d | date: 'shortTime' }}</h2>
    <h2>{{ d | date: 'medium' }}</h2>
    <h2>{{ d | date: 'mediumDate' }}</h2>
    <h2>{{ d | date: 'mediumTime' }}</h2>
    <h2>{{ d | date: 'long' }}</h2>
    <h2>{{ d | date: 'longDate' }}</h2>
    <h2>{{ d | date: 'longTime' }}</h2>
  `,
  styles: [],
})
export class Test3Component implements OnInit {
  constructor() {}
  public d = new Date();
  ngOnInit(): void {}
}
