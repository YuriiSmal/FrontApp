import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from './basic-authentication.service';

export const authGuard = () => {
  const router = inject(Router);
  const basicAuth = inject(BasicAuthenticationService);

  const loggedIn = basicAuth.isUserLoggedIn();
  if (!loggedIn) {
    router.navigate(['/login']);
  }
  return loggedIn;
};
