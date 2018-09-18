import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearnHub';
}
