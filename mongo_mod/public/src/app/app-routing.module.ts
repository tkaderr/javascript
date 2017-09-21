import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMongoComponent } from './add-mongo/add-mongo.component';

const routes: Routes = [
{path: '', pathMatch: 'full', component:DashboardComponent},
{path: 'create', component:AddMongoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
