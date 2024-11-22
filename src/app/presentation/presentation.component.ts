import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],

})

export class PresentationComponent implements AfterViewInit, OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // Handle scrolling on page refresh
    const fragment = this.route.snapshot.fragment;
    if (fragment) {
      setTimeout(() => {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Align to top, below the toolbar
        }
      }, 0);
    }
  }

  closeSidenav(sidenav: MatSidenav): void {
    if (window.innerWidth < 768) {
      sidenav.close();
    }
  }

  ngAfterViewInit() {
    // Handle scrolling when navigating within the app
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
      }
    });
  }
}
