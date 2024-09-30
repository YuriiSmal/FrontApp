import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  message: string = ' awesome application '
  name : string = ''

  //Activated Route
  constructor(private router: ActivatedRoute) {

  }

  ngOnInit() {
    this.name = this.router.snapshot.params['name']

    console.log(this.message);
  }
}
