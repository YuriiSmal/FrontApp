import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username: string = 'yurii';
  password: string = ''
  errorMessage: string = 'Invalid Credentials';
  invalidLogin = false;

  //Router
  //Angular.giveMeRouter
  //Dependency Injection


  constructor(private router: Router,
              private hardcodedAuth: HardcodedAuthenticationService) {
  }


  ngOnInit() {
    console.log('ngOnInit');
  }

  handleLogin() {

    if (this.hardcodedAuth.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else this.invalidLogin = true;

  }
}
