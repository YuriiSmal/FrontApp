import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {

  }


  isRelativeFooter = false; // Default footer state

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      // Adjust footer style based on the current route
      this.isRelativeFooter = this.router.url.startsWith('/presentation/');
    });
  }
}
