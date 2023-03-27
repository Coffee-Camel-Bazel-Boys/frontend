import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LandSummary } from "../models/land-summary.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LandService {

  private readonly SERVICE_URL = `/api/lands`;

  save(land: any) {
    throw "Not implemented";
  }
  constructor(private httpClient: HttpClient) { }

  getLotFeatures(extent: Array<number>) {
    // Assuming a magic proxy :)
    return `https://gc.rawley.xyz:6001/geo?service=WFS&` +
      'version=1.1.0&request=GetFeature&typename=community&' +
      'outputFormat=application/json&srsname=EPSG:3857&' +
      'bbox=' + extent.join(',') + ',EPSG:3857';
  }

  findAllLand(): Observable<LandSummary> {
    return this.httpClient.get<LandSummary>(this.SERVICE_URL);
  }
}
