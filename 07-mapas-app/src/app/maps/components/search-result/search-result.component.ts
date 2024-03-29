import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Feature } from '../../interfaces/places';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  public selectedId: string = ""

  constructor(private placesService: PlacesService, private mapService: MapService){
  }

  get isLoadingPlaces(){
    return this.placesService.isLoadingPlaces
  }


  get places(){
    return this.placesService.places
  }


  flyTo(places: Feature){
    this.selectedId = places.id
    const [lng, lat ] = places.center
    this.mapService.flyTo([lng, lat])
  }


  getDirections(place: Feature){

    if(!this.placesService.userLocation) throw Error("No hay userLocation")

    const start = this.placesService.userLocation;
    const end = place.center as [number, number]
    this.mapService.getRouteBetweenPoints(start, end)

  }
}
