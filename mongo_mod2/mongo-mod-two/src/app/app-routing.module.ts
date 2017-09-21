import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMongoComponent } from './add-mongo/add-mongo.component';
import { EditMongoComponent } from './edit-mongo/edit-mongo.component';

const routes: Routes = [
{path: '', pathMatch: 'full', component:DashboardComponent},
{path: 'create', component:AddMongoComponent },
{path: 'mongooses/:id', component: EditMongoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
