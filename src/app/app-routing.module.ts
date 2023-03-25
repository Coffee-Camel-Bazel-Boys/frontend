import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./routes/dashboard/dashboard.component";
import {SearchResultsComponent} from "./routes/search-results/search-results.component";
import {LoginComponent} from "./routes/login/login.component";
import {LandSetupComponent} from "./routes/land-setup/land-setup.component";
import {LandOverviewComponent} from "./routes/land-overview/land-overview.component";

const routes: Routes = [
  {
    path: "search",
    component: SearchResultsComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "land-setup",
    component: LandSetupComponent
  },
  {
    path: "land/:landId",
    component: LandOverviewComponent
  },
  {
    path: "",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
