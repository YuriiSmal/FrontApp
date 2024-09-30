import {Component, OnInit} from '@angular/core';
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  ngOnInit(): void {
    this.hardcodedAuthService.logout();
  }

  constructor(public hardcodedAuthService: HardcodedAuthenticationService) {
  }

}
