import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  searchControl = new FormControl();

  constructor(private router: Router) {
  }

  search() {
    this.router.navigate(["search"], {queryParams: {results: this.searchControl.value}});
  }

}
