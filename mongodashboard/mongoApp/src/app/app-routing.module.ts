import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { PollComponent } from './poll/poll.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/login'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',component: DashboardComponent },
  { path: 'logout',redirectTo:'login'},
  { path: 'poll/:id', component: PollComponent },
  { path: 'create',component: AddSurveyComponent },
  { path: '**', component: DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }