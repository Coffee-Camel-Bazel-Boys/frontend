import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LandService {

  constructor() { }

  save(land: any) {
    throw "Not implemented";
  }


  getLotFeatures(extent: Array<number>) {
    // Assuming a magic proxy :)
    return `http://gc.rawley.xyz:6001/geo?service=WFS&` +
    'version=1.1.0&request=GetFeature&typename=community&' +
    'outputFormat=application/json&srsname=EPSG:3857&' +
    'bbox=' + extent.join(',') + ',EPSG:3857';
   }
}
