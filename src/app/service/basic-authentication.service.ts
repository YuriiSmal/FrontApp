import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) {
  }


  executeAuthService(username: string, password: string): Observable<AuthBean> {
    const basicAuthString = 'Basic ' + window.btoa(`${username}:${password}`)
    const headers = new HttpHeaders({
      Authorization: basicAuthString
    })
    return this.http.get<AuthBean>('http://localhost:8080/basicauth', {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authUser', username);
          sessionStorage.setItem('token', basicAuthString);
          return data;
        }
      )
    )
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authUser');
  }

  getAuthenticatedToken() {
    return this.getAuthenticatedUser() ? sessionStorage.getItem('token') : null
  }

  isUserLoggedIn() {
    let user;
    if (typeof window !== 'undefined' && window.sessionStorage) {
      // Код для доступу до sessionStorage
      user = sessionStorage.getItem('authUser');
      //console.log(user);
    } else {
      //console.log('sessionStorage is not available');
    }

    return user !== null;
  }

  logout() {
    sessionStorage.removeItem('authUser');
    sessionStorage.removeItem('token');
  }
}


export class AuthBean {
  constructor(public message: string) {
  }
}
