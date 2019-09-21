import { Component, OnInit } from '@angular/core';

import { fromEvent, from } from 'rxjs';

import Map from 'ol/Map';
import MapBrowserPointerEvent from 'ol/MapBrowserEvent';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Coordinate } from 'ol/coordinate';
import { defaults as defaultControls, Attribution } from 'ol/control';
import { transform, get as getProjection } from 'ol/proj';
import { MapService } from '../../common/map.service';
import * as FileSaver from 'file-saver';
import { RasterEnvi } from '../../common/gdal/envi/raster-envi';

export enum Epsg {
  EPSG6668 = 'EPSG:6668',
  EPSG6677 = 'EPSG:6677',
  EPSG3857 = 'EPSG:3857'
}

@Component({
  selector: 'app-plotter',
  templateUrl: './plotter.component.html',
  styleUrls: ['./plotter.component.css']
})
export class PlotterComponent implements OnInit {

  public coordinateLongLat: Coordinate = [];
  public coordinate: Coordinate = [];

  private map: Map;

  constructor(
    private mapService: MapService) { }

  ngOnInit() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      controls: defaultControls({
        attribution: false,
        zoom: true
      })
        .extend([new Attribution({ collapsible: false })]),
      view: new View({
        projection: getProjection(Epsg.EPSG6677),
        center: transform(
          [139.82413217709316, 35.54266848294656],
          Epsg.EPSG6668,
          Epsg.EPSG6677),
        maxZoom: 20,
        zoom: 15
      })
    });

    this.map.on('pointermove', (event: MapBrowserPointerEvent) => {
      this.coordinateLongLat =
        transform(
          event.coordinate,
          Epsg.EPSG6677,
          Epsg.EPSG6668);
      this.coordinate = event.coordinate;
    });

    fromEvent(this.map.getViewport(), 'mouseenter')
      .subscribe((event) => {
        // console.log(event);
      });

    fromEvent(this.map.getViewport(), 'mouseleave')
      .subscribe((event) => {
        this.coordinate[0] = undefined;
        this.coordinate[1] = undefined;
        this.coordinateLongLat[0] = undefined;
        this.coordinateLongLat[1] = undefined;
      });
  }

  downloadDsm(event: MouseEvent) {
    const envi = new RasterEnvi();
    const name = 'test';

    envi.zip(name).subscribe(
      (data: Blob) => {
        console.log(data);
        FileSaver.saveAs(data, `${name}.zip`);
      }
    );
  }
}
