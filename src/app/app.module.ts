import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './routes/dashboard/dashboard.component';
import {SearchResultsComponent} from './routes/search-results/search-results.component';
import {LandOverviewComponent} from './routes/land-overview/land-overview.component';
import {LandSetupComponent} from './routes/land-setup/land-setup.component';
import {LandCardComponent} from './components/land-card/land-card.component';
import {MapComponent} from './components/map/map.component';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from './routes/login/login.component';
import {RegisterComponent} from './routes/register/register.component';
import { PlotComponent } from './plot/plot.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchResultsComponent,
    LandOverviewComponent,
    LandSetupComponent,
    LandCardComponent,
    MapComponent,
    NavigationBarComponent,
    LoginComponent,
    RegisterComponent,
    PlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
