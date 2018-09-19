import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { SideBarComponent } from './nav/sidebar.component'

import { routes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
