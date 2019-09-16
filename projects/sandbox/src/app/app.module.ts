import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorMapComponent } from './color-map/color-map.component';
import { GeotiffComponent } from './geotiff/geotiff.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorMapComponent,
    GeotiffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
