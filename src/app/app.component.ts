import {Component} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FLASH-APP';
  message = 'Just test'

  hideMenuAndFooter = false;

  constructor(private router: Router) {
  }

  onActivate(event: RouterOutlet): void {
    console.debug(event)
    const routesWithoutMenuFooter = '/presentation'; // Список сторінок без menu та footer
    this.hideMenuAndFooter = this.router.url.startsWith(routesWithoutMenuFooter);
  }
}
