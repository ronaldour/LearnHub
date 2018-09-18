import { Component } from '@angular/core'

@Component({
   selector: 'side-bar',
   templateUrl: './sidebar.component.html',
   styleUrls: ['./sidebar.component.scss']
})

export class SideBarComponent {
   showMenu: string = ''

   toggleMenu(element: any) {
      if (element === this.showMenu) {
          this.showMenu = '0';
      } else {
          this.showMenu = element;
      }
  }
}