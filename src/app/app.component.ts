import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  whyquitIconSrc: string;
  title = 'app';
  private isNavigationMenuOpen: boolean;

  constructor() {
    this.whyquitIconSrc = environment.apiUrl + "whyquit/images/icons/whyquit-icon.ico";
    this.isNavigationMenuOpen = false;
  }

  toggleNavigationMenu() {
    var menuWidth = this.isNavigationMenuOpen ? "0" : "300px";
    this.isNavigationMenuOpen = !this.isNavigationMenuOpen;
    document.getElementById("sideNavigationBar").style.width = menuWidth;
  };
}
