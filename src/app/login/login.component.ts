import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";
import {BasicAuthenticationService} from "../service/basic-authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username!: string
  password!: string
  errorMessage: string = 'Invalid Credentials';
  invalidLogin = false;

  //Router
  //Angular.giveMeRouter
  //Dependency Injection


  constructor(private router: Router,
              //private hardcodedAuth: HardcodedAuthenticationService,
              private basicAuth: BasicAuthenticationService) {
  }


  ngOnInit() {
    //console.log('ngOnInit');
  }

  // handleLogin() {
  //
  //   if (this.hardcodedAuth.authenticate(this.username, this.password)) {
  //     this.router.navigate(['welcome', this.username]);
  //     this.invalidLogin = false;
  //   } else this.invalidLogin = true;
  // }

  handleBasicAuth() {
    this.basicAuth.executeAuthService(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }

  handleJWTAuth() {
    this.basicAuth.executeJWTAuthService(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }
}
