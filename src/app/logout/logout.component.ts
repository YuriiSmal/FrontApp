import {Component, OnInit} from '@angular/core';
import {BasicAuthenticationService} from "../service/basic-authentication.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  ngOnInit(): void {
    this.basicAuth.logout();
  }

  constructor(public basicAuth: BasicAuthenticationService) {
  }

}
