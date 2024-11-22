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
import { PresentationComponent } from './presentation/presentation.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutMeComponent } from './presentation/about-me/about-me.component';
import { ProgramComponent } from './presentation/program/program.component';
import { StudentFeedbacksComponent } from './presentation/student-feedbacks/student-feedbacks.component';
import { ContactComponent } from './presentation/contact/contact.component';

// Angular Material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {WelcomePresentationComponent} from "./presentation/welcome/welcome-presentation.component";

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
    AboutMeComponent,
    ProgramComponent,
    StudentFeedbacksComponent,
    WelcomePresentationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // Required for Angular Material
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
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
