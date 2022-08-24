import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>test</h2>
    <h2>String Pipes</h2>
    <h2>{{ name }}</h2>
    <h2>{{ name | lowercase }}</h2>
    <h2>{{ name | uppercase }}</h2>
    <h2>{{ message | titlecase }}</h2>
    <h2>{{ name | slice: 3 }}</h2>
    <h2>{{ name | slice: 3:7 }}</h2>
    <h2>{{ person | json }}</h2>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  constructor() {}
  public name = 'Priyanshu';
  public message = 'welcome priyanshu';
  public person = {
    firstName: 'Srija',
    lastName: 'Ghosh',
  };
  ngOnInit(): void {}
}
