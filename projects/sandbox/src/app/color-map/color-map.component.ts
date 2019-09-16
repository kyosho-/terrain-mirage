import { Component, OnInit } from '@angular/core';

import { createColors } from 'color-map';
import { rgbHex } from 'color-map';
import { createColorsFromMap, ColorMap } from 'color-map';

@Component({
  selector: 'app-color-map',
  templateUrl: './color-map.component.html',
  styleUrls: ['./color-map.component.css']
})
export class ColorMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.rgbRange();
    // this.rgbHex();
    this.colorMap();
  }

  rgbRange() {
    // creates array of [r,g,b,a]
    const rgbaRange = createColors([0, 0, 255], [0, 255, 128], 32, [0, 1]);
    console.log(rgbaRange);

    // creates array of [r,g,b,1]
    const rgbRange = createColors([0, 0, 255], [0, 255, 128], 72);
    console.log(rgbRange);
  }

  rgbHex() {
    // '#0080ff'
    const a = rgbHex([0, 128, 255]);
    console.log(a);

    // '#0080ff'
    const b = rgbHex([0, 128, 255, 0.3]);
    console.log(b);
  }

  colorMap() {
    const summer: ColorMap = [{ index: 0, rgb: [0, 128, 102] }, { index: 1, rgb: [255, 255, 102] }];
    console.log(summer);

    const colors = createColorsFromMap(summer, 60);
    console.log(colors);
  }
}
