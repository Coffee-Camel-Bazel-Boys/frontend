import {Component, OnInit} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import MapboxVectorLayer from "ol/layer/MapboxVector";
import {bbox as bboxStrategy} from 'ol/loadingstrategy';
import { LandService } from 'src/app/services/land.service';
import VectorSource from 'ol/source/Vector';
import {Vector} from 'ol/layer';
import {GeoJSON} from 'ol/format';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private landService: LandService) {}
 
  map: Map = new Map();

  lotSource = new VectorSource({
    format: new GeoJSON(),
    url: (extent) => this.landService.getLotFeatures(extent),
    strategy: bboxStrategy
  });

  lotLayer = new Vector({
    source: this.lotSource
  });

  ngOnInit(): void {
    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new MapboxVectorLayer({
          styleUrl:
            'https://api.maptiler.com/maps/bright/style.json?key=lirfd6Fegsjkvs0lshxe',
        }),
        this.lotLayer
      ],
      target: 'ol-map'
    });
  }
}
