import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
//Mapboxgl.accessToken = 'pk.eyJ1IjoiYm9yaXNjMjAwMCIsImEiOiJjbGdhM28zY2YwNHg0M2RwcHNrODRvaW15In0.4k23MjD3RQhsQNguA9yerA';

Mapboxgl.accessToken = 'pk.eyJ1IjoiYm9yaXNjMjAwMCIsImEiOiJjbGdhM28zY2YwNHg0M2RwcHNrODRvaW15In0.4k23MjD3RQhsQNguA9yerA';

if(!navigator.geolocation){
  alert("Navegador no soporta la Geolocalización")
  throw new Error("Navegador no soporta la Geolocalización")
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
