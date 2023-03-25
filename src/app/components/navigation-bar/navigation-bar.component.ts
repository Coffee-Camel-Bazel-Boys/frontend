import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import { Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, map, mergeMap, takeUntil} from "rxjs/operators";
import {AutocompleteService} from "../../services/autocomplete.service";
import {Place} from "../../models/place.model";

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

  places: Place[] = [];

  private destroyed$ = new Subject();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private autocompleteService: AutocompleteService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe(takeUntil(this.destroyed$))
      .subscribe(queryParams =>
        this.searchForm.get('search')?.setValue(queryParams.get('results'))
      );
    this.searchForm.get('search')?.valueChanges.pipe(
      takeUntil(this.destroyed$),
      distinctUntilChanged(),
      debounceTime(200),
      mergeMap(value => this.autocompleteService.autoComplete(value))
      ).subscribe(results => {
      console.log(results);
      this.places = results?.features?.map((value: any) => {
        return {address: value.properties.formatted, lat: value.properties.lat, long: value.properties.lon} as Place
      })
      console.log(this.places);
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

  selectPlace(place: Place) {
    if(!place) {
      return;
    }
    this.searchForm.get('search')?.setValue(place.address);
    this.places = [];
  }

  navigateToDashboard() {
    this.router.navigate([""], {queryParams: {}});
  }

  search() {
    this.router.navigate(["search"], {queryParams: {results: this.searchForm.get('search')?.value}});
  }

}
