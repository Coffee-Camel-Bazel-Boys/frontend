import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  private readonly SERVICE_URL: string = 'https://api.geoapify.com/v1/geocode/autocomplete';
  private readonly API_KEY = 'ea3e6fb9c17f49aea17cb2456be75512';

  constructor(private httpClient: HttpClient) { }

  autoComplete(value: string): Observable<any> {
    // https://api.geoapify.com/v1/geocode/autocomplete?text=Mosco&apiKey=ea3e6fb9c17f49aea17cb2456be75512
    return this.httpClient.get(`${this.SERVICE_URL}?text=${value}&apiKey=${this.API_KEY}`);
  }
}
