// welcome-data.service.ts

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from "../../app.constants";

export interface HelloWorldBean {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) {
  }

  // Викликає API для отримання об'єкта HelloWorldBean
  executeHelloWorldBeanService(): Observable<HelloWorldBean> {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldServiceWithPath(name: string): Observable<HelloWorldBean> {

    // const basic = this.createBasicAuthHeader();
    // const headers = new HttpHeaders({
    //   Authorization: basic
    // })
    // return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`,
    //   {headers})

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`);
  }


  // createBasicAuthHeader() {
  //   const username = 'yurii'
  //   const pass = 'standard'
  //   const basicAuthString = 'Basic ' + window.btoa(`${username}:${pass}`)
  //   return basicAuthString;
  // }

  /*
  Access to XMLHttpRequest at '${API_URL}/login'
  (redirected from '${API_URL}/hello-world/path-variable/yurii')
  from origin 'http://localhost:4200'
  has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  */
}
