import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomePresentationComponent} from './presentation/welcome/welcome-presentation.component';
import {ErrorComponent} from './error/error.component';
import {ListTodosComponent} from './list-todos/list-todos.component';
import {LogoutComponent} from './logout/logout.component';
import {authGuard} from './service/route-guard.service';
import {TodoComponent} from './todo/todo.component';
import {PresentationComponent} from './presentation/presentation.component';
import {AboutMeComponent} from './presentation/about-me/about-me.component';
import {ProgramComponent} from './presentation/program/program.component';
import {StudentFeedbacksComponent} from './presentation/student-feedbacks/student-feedbacks.component';
import {ContactComponent} from './presentation/contact/contact.component';
import {WelcomeComponent} from './welcome/welcome.component';

// Root routes
const routes: Routes = [
  {path: '', redirectTo: 'presentation', pathMatch: 'full'}, // Default route
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate: [authGuard]},
  {path: 'todos', component: ListTodosComponent, canActivate: [authGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [authGuard]},
  {path: 'todos/:id', component: TodoComponent, canActivate: [authGuard]},

  // Presentation route with child paths
  {
    path: 'presentation',
    component: PresentationComponent,
    children: [
      {path: '', redirectTo: 'presentation', pathMatch: 'full'},
      {path: 'welcome', component: WelcomePresentationComponent},
      {path: 'about-me', component: AboutMeComponent},
      {path: 'program', component: ProgramComponent},
      {path: 'student-feedbacks', component: StudentFeedbacksComponent},
      {path: 'contact', component: ContactComponent},
    ],
  },

  {path: '**', component: ErrorComponent}, // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Restores scroll position on navigation
    anchorScrolling: 'enabled', // Enables scrolling to fragments
    onSameUrlNavigation: "reload"
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
