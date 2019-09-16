import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorMapComponent } from './color-map/color-map.component';
import { GeotiffComponent } from './geotiff/geotiff.component';


const routes: Routes = [
  { path: 'color-map', component: ColorMapComponent },
  { path: 'geotiff', component: GeotiffComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
