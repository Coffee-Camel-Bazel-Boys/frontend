import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import { Subject } from 'rxjs';
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit, OnDestroy {

  // needs to be a formGroup for ngSubmit event
  searchForm: FormGroup = new FormGroup({
    search: new FormControl()
  });

  private destroyed$ = new Subject();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe(takeUntil(this.destroyed$))
      .subscribe(queryParams =>
        this.searchForm.get('search')?.setValue(queryParams.get('results'))
      );
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

  navigateToDashboard() {
    this.router.navigate([""], {queryParams: {}});
  }

  search() {
    this.router.navigate(["search"], {queryParams: {results: this.searchForm.get('search')?.value}});
  }

}
