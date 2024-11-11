import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL} from "../app.constants";

export const AUTH_USER = 'authUser'
export const TOKEN = 'token'

export interface AuthData {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) {
  }

  executeJWTAuthService(username: string, password: string): Observable<AuthData> {
    return this.http.post<AuthData>(`${API_URL}/authenticate`,
      {
        username,
        password
      }
    ).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTH_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    )
  }


  executeAuthService(username: string, password: string): Observable<AuthBean> {
    const basicAuthString = 'Basic ' + window.btoa(`${username}:${password}`)
    const headers = new HttpHeaders({
      Authorization: basicAuthString
    })
    return this.http.get<AuthBean>(`${API_URL}/basicauth`, {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTH_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthString);
          return data;
        }
      )
    )
  }

  getAuthenticatedUser() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return <string>sessionStorage.getItem(AUTH_USER);
    }
    return null
  }

  getAuthenticatedToken() {
    return this.getAuthenticatedUser() ? sessionStorage.getItem(TOKEN) : null
  }

  isUserLoggedIn() {
    let user;
    if (typeof window !== 'undefined' && window.sessionStorage) {
      // Код для доступу до sessionStorage
      user = sessionStorage.getItem(AUTH_USER);
      //console.log(user);
    } else {
      //console.log('sessionStorage is not available');
    }

    return user !== null;
  }

  logout() {
    if (this.isUserLoggedIn()) {
      sessionStorage.removeItem(AUTH_USER);
      sessionStorage.removeItem(TOKEN);
    }
  }
}


export class AuthBean {
  constructor(public message: string) {
  }
}
