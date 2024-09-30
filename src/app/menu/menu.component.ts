import {Component, OnInit} from '@angular/core';
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  //isUserLoggedIn: boolean = false;

  ngOnInit(): void {
    console.log('');
  }

  constructor(public hardcodedAuthService: HardcodedAuthenticationService) {

  }

}
