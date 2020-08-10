import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { DataTableComponent } from './dashboard-view/data-table/data-table.component';
import { CustomDivComponent } from './dashboard-view/custom-div/custom-div.component';

const routes: Routes = [
  { path: '', component: LandingViewComponent },
  {
    path: 'dashboard',
    component: DashboardViewComponent,
    children: [
      { path: '', component: DataTableComponent },
      { path: 'div', component: CustomDivComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
