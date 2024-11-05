import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from 'rxjs';
import {BasicAuthenticationService} from "../basic-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuth: BasicAuthenticationService
  ) {
  }


  intercept(request: HttpRequest<never>, next: HttpHandler): Observable<HttpEvent<any>> {
    const basicAuthString = this.basicAuth.getAuthenticatedToken();
    const userName = this.basicAuth.getAuthenticatedUser();

    if (basicAuthString && userName) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthString
        }
      })
    }

    return next.handle(request);
  }
}
