import {Component, OnInit} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import MapboxVectorLayer from "ol/layer/MapboxVector";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: Map = new Map();

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
        })
      ],
      target: 'ol-map'
    });
  }
}
