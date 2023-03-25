import { Component } from '@angular/core';
import {LandSummary} from "../../models/land-summary.model";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  mockLandSummaries: LandSummary[] = [
    {
      landId: '78998328490',
      priceMin: 15,
      priceMax: 25
    }
  ]

}
