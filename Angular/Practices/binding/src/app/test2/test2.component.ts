import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <h2>test 2</h2>
    <h2>Property Binding</h2>
    <h2>Welcome {{ name }}</h2>
    <input [id]="myId" type="text" value="Priyanshu" />
    <input id="{{ myId }}" type="text" value="Priyanshu" />
    <input [disabled]="isDisabled" type="text" value="Priyanshu" />
    <input bind-disabled="isDisabled" type="text" value="Priyanshu" />
  `,
  styles: [],
})
export class Test2Component implements OnInit {
  constructor() {}
  public name = 'Priyanshu';
  public myId = 'test2-id';
  public isDisabled = false;
  ngOnInit(): void {}
}
