import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  private readonly SERVICE_URL: string = '/api/geo/autocomplete';

  constructor(private httpClient: HttpClient) { }

  autoComplete(value: string): Observable<any> {
    return this.httpClient.post(`${this.SERVICE_URL}`, { text: value });
  }
}
