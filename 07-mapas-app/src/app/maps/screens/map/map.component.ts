import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

constructor( private placesService: PlacesService){
}


get isUserLocationReady(){
  return this.placesService.isUserLocationReady;
}

}
