import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WelcomeDataService} from "../service/data/welcome-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  message: string = ' awesome application '
  name: string = ''

  //Activated Route
  constructor(private router: ActivatedRoute,
              private service: WelcomeDataService
  ) {

  }

  ngOnInit() {
    this.name = this.router.snapshot.params['name']
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe();
    // console.log("Hello bro!");
  }
}
