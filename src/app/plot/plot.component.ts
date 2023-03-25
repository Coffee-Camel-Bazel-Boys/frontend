import { AfterViewInit, Component, ElementRef, forwardRef, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Plot } from '../models/plot';
import TileLayer from 'ol/layer/Tile';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import {Draw, Modify, Snap} from 'ol/interaction.js';
import { interval, Subscription, timeout } from 'rxjs';
import { Observable } from 'ol';
import VectorEventType from 'ol/source/VectorEventType';

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
export class PlotComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {

  @ViewChild('olMap')
  mapElement: ElementRef | undefined;

  plot: Plot = {
    id: undefined,
    landId: undefined,
    plotNumber: "",
    description: "",
    price: "",
    shape: []
  };

  formGroup: FormGroup = new FormGroup({
    description: new FormControl(""),
    price: new FormControl("")
  });

  onChange = (a:Plot) => {};
  onTouch = () => {};

  subs: Array<Subscription> = [];

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
    }
  });

  ngOnDestroy(): void {
    this.subs.forEach(sub=> sub.unsubscribe())
  }

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
    console.log(this.source);

    this.subs.push(this.formGroup.valueChanges.subscribe(() => {
      this.plot.description = this.formGroup.get("description")?.value as string;
      this.plot.description = this.formGroup.get("price")?.value as string;
      this.onChange(this.plot);
    })
    )
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

    // this.snap.on("change", a => console.log(a));
    this.draw.on('drawend', (e:any) => {
      const coordinates = e.feature.getGeometry().getCoordinates()      ;
      console.log(coordinates);
      this.plot.shape = [];
      coordinates.forEach((element: Array<string>) => {
        this.plot.shape.push({x:element[0], y: element[1]});
      });
      // this.plot.shape = 
      this.onChange(this.plot);
    });
  }
  
}