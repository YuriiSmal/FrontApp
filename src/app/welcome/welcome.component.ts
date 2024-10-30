import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HelloWorldBean, WelcomeDataService} from "../service/data/welcome-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  message: string = ' awesome application '
  welcomeMessageFromService: string = ''
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
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessResponse(response),

      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServiceWithPath(this.name).subscribe(
      response => this.handleSuccessResponse(response),

      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: ErrorEvent) {
    console.log(error.error.message)
    this.welcomeMessageFromService = error.error.message
  }
}
