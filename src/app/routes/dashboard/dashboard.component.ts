import { Component } from '@angular/core';
import {LandSummary} from "../../models/land-summary.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  mockLandSummaries: LandSummary[] = [
    {
      landId: '78998328490',
      priceMin: 15,
      priceMax: 25
    }
  ]

}
