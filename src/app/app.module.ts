import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { SearchResultsComponent } from './routes/search-results/search-results.component';
import { LandOverviewComponent } from './routes/land-overview/land-overview.component';
import { LandSetupComponent } from './routes/land-setup/land-setup.component';
import { LandCardComponent } from './components/land-card/land-card.component';
import { MapComponent } from './components/map/map.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchResultsComponent,
    LandOverviewComponent,
    LandSetupComponent,
    LandCardComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
