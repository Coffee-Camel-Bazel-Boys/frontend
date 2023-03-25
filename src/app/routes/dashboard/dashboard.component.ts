import {Component, OnInit} from '@angular/core';
import {LandSummary} from "../../models/land-summary.model";
import {LandService} from "../../services/land.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  mockLandSummaries: LandSummary[] = [
    {
      landId: '78998328490',
      priceMin: 15,
      priceMax: 25
    }
  ];

  constructor(private landService: LandService) {
  }

  ngOnInit(): void {
    this.landService.findAllLand().subscribe(land => console.log(land));
  }

}
