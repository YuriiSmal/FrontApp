import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {ErrorComponent} from './error/error.component';
import {ListTodosComponent} from './list-todos/list-todos.component';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {LogoutComponent} from './logout/logout.component';
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import {TodoComponent} from './todo/todo.component';
import {HttpInterceptorBasicAuthService} from "./service/http/http-interceptor-basic-auth.service";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {PresentationComponent} from "./presentation/presentation.component";
import {AboutComponent} from "./presentation/about/about.component";
import {CourseComponent} from "./presentation/course/course.component";
import {PriceComponent} from "./presentation/price/price.component";
import {ContactComponent} from "./presentation/contact/contact.component";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggle} from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
    PresentationComponent,
    AboutComponent,
    CourseComponent,
    PriceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggle
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true
    },
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
