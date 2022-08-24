import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  template: `
    <h2>test 3</h2>
    <h2>Class Binding</h2>
    <h2>Welcome {{ name }}</h2>
    <h2 class="text-success">Normal Success</h2>
    <h2 class="text-danger">Normal Danger</h2>
    <h2 class="text-special">Normal Special</h2>

    <h2 [class]="successClass">Class Binding Success</h2>
    <h2 [class]="dangerClass">Class Binding Danger</h2>
    <h2 [class]="specialClass">Class Binding Special</h2>

    <h2 [class]="dangerClass" class="text-success">
      Danger class has priority
    </h2>

    <h2 [class.text-danger]="hasError">based on a property</h2>

    <h2 [ngClass]="messageClasses">multiple classes</h2>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class Test3Component implements OnInit {
  constructor() {}
  public name = 'Priyanshu';
  public successClass = 'text-success';
  public dangerClass = 'text-danger';
  public specialClass = 'text-special';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };
  ngOnInit(): void {}
}
