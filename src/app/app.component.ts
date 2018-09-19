import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <section class="main-container" [ngClass]="{collapsed: collapedSideBar}">
      <router-outlet></router-outlet>
    </section>
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LearnHub'
  collapedSideBar = false
}
