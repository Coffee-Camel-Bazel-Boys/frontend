import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { createPlot, Plot } from 'src/app/models/plot';
import { LandService } from 'src/app/services/land.service';

@Component({
  selector: 'app-land-setup',
  templateUrl: './land-setup.component.html',
  styleUrls: ['./land-setup.component.scss']
})
export class LandSetupComponent {

  constructor(private landService: LandService) {

  }

  formGroup: FormGroup = new FormGroup({
    details: new FormControl(),
    landAvailability: new FormGroup({
      daysOfTheWeek: new FormArray([]),
      start: new FormControl(),
      end: new FormControl()
    }),
    plots: new FormArray([])
  });

  get plots(): FormArray {
    return this.formGroup.get("plots") as FormArray;
  }

  addPlot(): void {
    this.plots.push(new FormControl(createPlot(`${this.plots.controls.length + 1}`)))
  }

  save(): void {
    this.landService.save(this.formGroup.value);
  }
}


