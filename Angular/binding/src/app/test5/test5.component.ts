import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test5',
  template: `
    <h2>test 5</h2>
    <h2>Event Binding</h2>
    <button (click)="onClick1()">Greet</button>
    <h2>{{ greetingMessage1 }}</h2>
    <br />
    <button (click)="onClick2($event)">Event</button>
    <h2>{{ greetingMessage2 }}</h2>
    <br />
    <button (click)="greetingMessage3 = 'Welcome Priyanshu'">Direct</button>
    <h2>{{ greetingMessage3 }}</h2>
  `,
  styles: [],
})
export class Test5Component implements OnInit {
  constructor() {}
  public greetingMessage1 = '';
  public greetingMessage2 = '';
  public greetingMessage3 = '';
  ngOnInit(): void {}

  onClick1(): void {
    alert('Welcome Priyanshu!');
    this.greetingMessage1 = 'Welcome Priyanshu!';
  }
  onClick2(event: any): void {
    console.log(event);
    this.greetingMessage2 = event.type;
  }
}
