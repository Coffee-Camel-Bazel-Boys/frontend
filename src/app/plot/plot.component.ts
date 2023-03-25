import { AfterViewInit, Component, ElementRef, forwardRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Plot } from '../models/plot';
import TileLayer from 'ol/layer/Tile';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import {Draw, Modify, Snap} from 'ol/interaction.js';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss'],
  providers: [     
    {       provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => PlotComponent),
            multi: true     
    }  
  ]
})
export class PlotComponent implements ControlValueAccessor, AfterViewInit {

  @ViewChild('olMap')
  mapElement: ElementRef | undefined;

  plot = {};

  formGroup: FormGroup = new FormGroup({
    description: new FormControl(),
    price: new FormControl()
  });

  onChange = () => {};
  onTouch = () => {};

  map: Map = new Map();
  draw: Draw;
  snap: Snap;

  source = new VectorSource();
  vector = new VectorLayer({
    source: this.source,
    style: {
      'fill-color': 'rgba(255, 255, 255, 0.2)',
      'stroke-color': '#ffcc33',
      'stroke-width': 2,
      'circle-radius': 7,
      'circle-fill-color': '#ffcc33',
    },
  });

  ngAfterViewInit(): void {
    this.map = new Map({
      view: new View({
        center: [-104.6189, 50.4452],
        minZoom: 10,
        zoom: 15,
        projection: 'EPSG:4326',
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        this.vector
      ],
      target: this.mapElement?.nativeElement
    });
    
    const modify = new Modify({source: this.source});
    this.map.addInteraction(modify);
  }


  writeValue(plot: Plot): void {
    this.plot = plot
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    
  }

  addInteractions() {
    this.map.removeInteraction(this.draw);
    this.map.removeInteraction(this.snap);

    this.draw = new Draw({
      source: this.source,
      type: 'Polygon'
    });
    this.map.addInteraction(this.draw);
    this.snap = new Snap({source: this.source});
    this.map.addInteraction(this.snap);
  }
  
}