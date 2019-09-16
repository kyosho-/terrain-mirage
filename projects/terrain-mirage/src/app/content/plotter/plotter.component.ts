import { Component, OnInit } from '@angular/core';

import { fromEvent } from 'rxjs';

import Map from 'ol/Map';
import MapBrowserPointerEvent from 'ol/MapBrowserEvent';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Coordinate } from 'ol/coordinate';
import { defaults as defaultControls, Attribution } from 'ol/control';
import { transform, get as getProjection } from 'ol/proj';
import { register } from 'ol/proj/proj4';
import proj4 from 'proj4';

let code: string;
// http://tmizu23.hatenablog.com/entry/20091215/1260868350
// JGD2011(longlat) Center: 140.01500000 31.57000000 https://epsg.io/6668
code = 'EPSG:6668';
proj4.defs(code, '+proj=longlat +ellps=GRS80 +no_defs');
register(proj4);
getProjection(code).setExtent([122.38, 17.09, 157.65, 46.05]);
// JGD2011(UTM51N) Center: 619691.41101131 2810327.34502011 https://epsg.io/6688
code = 'EPSG:6688';
proj4.defs(code, '+proj=utm +zone=51 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([435606.21426124, 2333340.40507179, 790248.57787112, 3290419.88198679]);
// JGD2011(UTM52N) Center: 500000.00000000 3304934.47129717 https://epsg.io/6689
code = 'EPSG:6689';
proj4.defs(code, '+proj=utm +zone=52 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([188357.29562847, 2338370.12101507, 761149.33760646, 4279988.95649741]);
// JGD2011(UTM53N) Center: 500000.00000000 3354244.80937834 https://epsg.io/6690
code = 'EPSG:6690';
proj4.defs(code, '+proj=utm +zone=53 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([180701.57177047, 1891969.49027316, 742338.51525916, 4826267.58570205]);
// JGD2011(UTM54N) Center: 500000.00000000 3522701.12413525 https://epsg.io/6691
code = 'EPSG:6691';
proj4.defs(code, '+proj=utm +zone=54 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([181636.80059142, 1951776.93378187, 732083.84758630, 5103979.18095494]);
// JGD2011(UTM55N) Center: 401581.14578904 3800373.98759406 https://epsg.io/6692
code = 'EPSG:6692';
proj4.defs(code, '+proj=utm +zone=55 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([192525.24287411, 2549991.86137847, 567010.35667003, 5055520.92160815]);


// JGD2011(Planar rectangular CS 01) Center: -17694.12918193 -238365.45732243 https://epsg.io/6669
code = 'EPSG:6669';
proj4.defs(code, '+proj=tmerc +lat_0=33 +lon_0=129.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-132049.50809241, -668787.99651125, 87905.60739469, 193401.31124214]);
// JGD2011(Planar rectangular CS 02) Center: -8967.66202959 -101456.07083032 https://epsg.io/6670
code = 'EPSG:6670';
proj4.defs(code, '+proj=tmerc +lat_0=33 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-119419.18290010, -311999.96764262, 97007.74237414, 110290.15565015]);
// JGD2011(Planar rectangular CS 03) Center: -1520.39136370 -105392.04982237 https://epsg.io/6671
code = 'EPSG:6671';
proj4.defs(code, '+proj=tmerc +lat_0=36 +lon_0=132.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-125737.06392058, -252087.01766665, 118732.85497148, 42974.91361943]);
// JGD2011(Planar rectangular CS 04) Center: -11140.61102228 63218.56858255 https://epsg.io/6672
code = 'EPSG:6672';
proj4.defs(code, '+proj=tmerc +lat_0=33 +lon_0=133.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-145349.82388395, -33314.08387044, 120373.92844187, 161592.74679491]);
// JGD2011(Planar rectangular CS 05) Center: -3045.59309449 -119812.46646363 https://epsg.io/6673
code = 'EPSG:6673';
proj4.defs(code, '+proj=tmerc +lat_0=36 +lon_0=134.3333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-110992.00295449, -206786.41253948, 102851.84721321, -31578.58484374]);
// JGD2011(Planar rectangular CS 06) Center: -6857.15343080 -125911.42130513 https://epsg.io/6674
code = 'EPSG:6674';
proj4.defs(code, '+proj=tmerc +lat_0=36 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-106045.51424834, -287821.78203977, 88881.12612890, 37068.76311182]);
// JGD2011(Planar rectangular CS 07) Center: -12314.13837264 5001.31624659 https://epsg.io/6675
code = 'EPSG:6675';
proj4.defs(code, '+proj=tmerc +lat_0=36 +lon_0=137.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-86924.20137165, -164885.06398840, 59470.62651642, 175534.08328604]);
// JGD2011(Planar rectangular CS 08) Center: 10293.99441293 62139.89291490 https://epsg.io/6676
code = 'EPSG:6676';
proj4.defs(code, '+proj=tmerc +lat_0=36 +lon_0=138.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-108311.31609820, -161331.87717500, 122852.53486359, 287250.64019386]);
// JGD2011(Planar rectangular CS 09) Center: -7266.04774766 -261228.66136337 https://epsg.io/6677
code = 'EPSG:6677';
proj4.defs(code, '+proj=tmerc +lat_0=36 +lon_0=139.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-139237.37425993, -740986.58279395, 112154.28054507, 220482.45460011]);
// JGD2011(Planar rectangular CS 10) Center: -1573.24702653 -38301.81422444 https://epsg.io/6678
code = 'EPSG:6678';
proj4.defs(code, '+proj=tmerc +lat_0=40 +lon_0=140.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-118410.45564333, -251124.64589974, 108957.53417591, 176265.86497041]);
// JGD2011(Planar rectangular CS 11) Center: 12352.16712048 -179947.34347946 https://epsg.io/6679
code = 'EPSG:6679';
proj4.defs(code, '+proj=tmerc +lat_0=44 +lon_0=140.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-76161.02776473, -295060.56985267, 97980.50829606, -63724.19555617]);
// JGD2011(Planar rectangular CS 12) Center: 0.00000000 -17220.44078119 https://epsg.io/6680
code = 'EPSG:6680';
proj4.defs(code, '+proj=tmerc +lat_0=44 +lon_0=142.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-112401.85236451, -204608.41722364, 106208.88063012, 172018.66555399]);
// JGD2011(Planar rectangular CS 13) Center: -813.54086854 -96095.12970512 https://epsg.io/6681
code = 'EPSG:6681';
proj4.defs(code, '+proj=tmerc +lat_0=44 +lon_0=144.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-136139.90274745, -235300.56083847, 129045.39378130, 45718.60856240]);
// JGD2011(Planar rectangular CS 14) Center: -23478.34683665 26054.28293296 https://epsg.io/6682
code = 'EPSG:6682';
proj4.defs(code, '+proj=tmerc +lat_0=26 +lon_0=142 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-80968.06937713, -147083.96782695, 32515.99943426, 199467.33473570]);
// JGD2011(Planar rectangular CS 15) Center: 1495.65453609 51513.01529828 https://epsg.io/6683
code = 'EPSG:6683';
proj4.defs(code, '+proj=tmerc +lat_0=26 +lon_0=127.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-87081.02180324, 2505.58599339, 89393.65205322, 101131.16560577]);
// JGD2011(Planar rectangular CS 16) Center: 17234.05372451 -170567.95673675 https://epsg.io/6684
code = 'EPSG:6684';
proj4.defs(code, '+proj=tmerc +lat_0=26 +lon_0=124 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-119061.64100944, -223244.59989521, 152504.78461464, -116567.49353080]);
// JGD2011(Planar rectangular CS 17) Center: 25193.01836496 -88039.43474561 https://epsg.io/6685
code = 'EPSG:6685';
proj4.defs(code, '+proj=tmerc +lat_0=26 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([12170.96457591, -177218.48155593, 38037.87865558, 1163.08565372]);
// JGD2011(Planar rectangular CS 18) Center: 9391.76651919 47048.32542726 https://epsg.io/6686
code = 'EPSG:6686';
proj4.defs(code, '+proj=tmerc +lat_0=20 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([2087.79932209, 40957.47601017, 16690.54400908, 53142.34550229]);
// JGD2011(Planar rectangular CS 19) Center: -2030.32568592 -189960.09433244 https://epsg.io/6687
code = 'EPSG:6687';
proj4.defs(code, '+proj=tmerc +lat_0=26 +lon_0=154 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs');
register(proj4);
getProjection(code).setExtent([-9141.11277202, -197156.09703478, 5073.22761260, -182760.46356411]);

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

  constructor() { }

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
}
