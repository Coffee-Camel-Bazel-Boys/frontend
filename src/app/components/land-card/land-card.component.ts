import {Component, Input} from '@angular/core';
import {LandSummary} from "../../models/land-summary.model";

@Component({
  selector: 'app-land-card',
  templateUrl: './land-card.component.html',
  styleUrls: ['./land-card.component.scss']
})
export class LandCardComponent {

  @Input() landSummary: LandSummary;

}
