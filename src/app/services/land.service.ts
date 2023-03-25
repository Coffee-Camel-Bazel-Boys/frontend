import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandService {

  constructor() { }



  getLotFeatures(extent: Array<number>) {
    // Assuming a magic proxy :)
    return `geo/?service=WFS&` +
    'version=1.1.0&request=GetFeature&typename=community&' +
    'outputFormat=application/json&srsname=EPSG:3857&' +
    'bbox=' + extent.join(',') + ',EPSG:3857';
   }
}
