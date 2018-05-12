import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { NavigationLink } from './shared/NavigationLink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  whyquitIconSrc: string;
  title = 'app';
  navigationLinks: NavigationLink[];
  private isNavigationMenuOpen: boolean;

  constructor(private meta: Meta) {
    this.meta.addTag({ name: "http-equiv", content: "img-src * data:" })

    this.whyquitIconSrc = environment.apiUrl + "whyquit/images/icons/whyquit-icon.ico";
    this.isNavigationMenuOpen = false;

    this.navigationLinks = [
      new NavigationLink("/index", "Home"),
      new NavigationLink("/education", "Education")
    ];
  }

  toggleNavigationMenu() {
    let menuWidth = this.isNavigationMenuOpen ? 0 : 300;
    this.setSideNavbarWidth(menuWidth);
    this.isNavigationMenuOpen = !this.isNavigationMenuOpen;
  }

  closeNavigationMenu() {
    this.setSideNavbarWidth(0);
    this.isNavigationMenuOpen = false;
  }

  private setSideNavbarWidth(width: number) {
    document.getElementById("sideNavigationBar").style.width = width + "px";
  }
}
