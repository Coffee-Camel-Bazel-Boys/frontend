import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  // needs to be a formGroup for ngSubmit event
  searchForm: FormGroup = new FormGroup({
    search: new FormControl()
  });

  constructor(private router: Router) {
  }

  navigateToDashboard() {
    this.router.navigate([""]);
  }

  search() {
    this.router.navigate(["search"], {queryParams: {results: this.searchForm.get('search')?.value}});
  }

}
