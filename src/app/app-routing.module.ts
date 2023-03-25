import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./routes/dashboard/dashboard.component";
import {SearchResultsComponent} from "./routes/search-results/search-results.component";

const routes: Routes = [
  {
    path: "search",
    component: SearchResultsComponent
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
