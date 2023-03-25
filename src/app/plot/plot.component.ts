import { AfterViewInit, Component, ElementRef, forwardRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Plot } from '../models/plot';
import TileLayer from 'ol/layer/Tile';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import View from 'ol/View';

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
      ],
      target: this.mapElement?.nativeElement
    });
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

}