import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RidesComponent } from './pages/rides/rides.component';

const routes: Routes = [
  {
    path:'dashborad',
    component:DashboardComponent,
     },
  {
    path:'rides',
    component: RidesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
