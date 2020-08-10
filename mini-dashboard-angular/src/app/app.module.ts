import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { LandingViewComponent } from './landing-view/landing-view.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { NavigationBarComponent } from './dashboard-view/navigation-bar/navigation-bar.component';
import { DataTableComponent } from './dashboard-view/data-table/data-table.component';
import { CustomDivComponent } from './dashboard-view/custom-div/custom-div.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    DashboardViewComponent,
    NavigationBarComponent,
    DataTableComponent,
    CustomDivComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
