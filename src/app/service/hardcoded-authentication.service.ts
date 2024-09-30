import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authenticate(username: string, password: string) {
    //console.log('before: ' + this.isUserLoggedIn())
    if (username === 'yurii' && password === '123') {
      sessionStorage.setItem('authUser', username);
      //console.log('after: ' + this.isUserLoggedIn())
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user;
    if (typeof window !== 'undefined' && window.sessionStorage) {
      // Код для доступу до sessionStorage
      user = sessionStorage.getItem('authUser');
      console.log(user);
    } else {
      console.log('sessionStorage is not available');
    }

    return user !== null;
  }

  logout() {
    sessionStorage.removeItem('authUser');
  }
}
