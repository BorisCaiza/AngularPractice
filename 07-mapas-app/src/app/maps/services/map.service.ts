import { Injectable } from '@angular/core';
import {AnySourceData, LngLat, LngLatBounds, LngLatLike, Map, Marker, Popup} from "mapbox-gl"
import { Feature } from '../interfaces/places';
import { BinaryOperator } from '@angular/compiler';
import { DirectionsApiClient } from '../api/directionsApiClient';
import { DirectionResponse, Route } from '../interfaces/directions';


@Injectable({
  providedIn: 'root'
})
export class MapService {


  private map!:Map
  private markers: Marker[] = []

  get isMapReady(){
    return !!this.map
  }




  setMap(map:Map){

    this.map = map
  }

  flyTo(cords:LngLatLike){
    if (!this.isMapReady) throw Error("El mapa no esta inicialziado");


    this.map?.flyTo({
      zoom:14,
      center: cords
    })
  }


  createMarkersFromPlaces(places:Feature[], userLocation:[number, number]){

    if(!this.map) throw Error("Mapa no inicialziado")

    


    this.markers.forEach(marker => marker.remove())

    const newMarkers = []

    for( const place of places){

      const [lng, lat] = place.center

      const popup = new Popup()
      .setHTML(`
        <h6>${place.text}</h6>
        <span>${place.place_name}</span>
      `

      )

      const newMarket = new Marker()
      .setLngLat([lng,lat])
      .setPopup(popup)
      .addTo(this.map)

      newMarkers.push(newMarket)


    }

    this.markers = newMarkers

    if(places.length == 0) return;

    //Límtes del mapa

    const bound =  new LngLatBounds()
    newMarkers.forEach( marker => bound.extend(marker.getLngLat()))
    bound.extend(userLocation)

    

    this.map.fitBounds(bound, {
      padding:150
    })

    
  }


  getRouteBetweenPoints(start: [number, number], end:[number, number]){

    this.direcionsApi.get<DirectionResponse>(`/${start.join(",")};${end.join(",")}`)
    .subscribe(resp=> this.drawPolyline(resp.routes[0]))
  }



  private drawPolyline(route: Route){

    console.log({kms: route.distance/1000, duration: route.duration/60})
    
    if(!this.map) throw Error("Mapa no inicializado")

    const coords = route.geometry.coordinates

    const bounds = new LngLatBounds();


    coords.forEach(([lng, lat])=>{
      bounds.extend([lng,lat])
    })

    this.map.fitBounds(bounds, {
      padding:150
    })

    //Polyline

    const sourceData: AnySourceData = {
      type:"geojson",
      data:{
        type:"FeatureCollection",
        features:[
          {
            type:"Feature",
            properties:{},
            geometry:{
              type:"LineString",
              coordinates: coords
            }
          }
        ]
      }
    }

    this.map.addSource('RouteString', sourceData);

    this.map.addLayer({
      id:"RouteString",
      type:"line",
      source:"RouteString",
      layout:{
        "line-cap":"round",
        "line-join":"round"
      },

      paint:{
        "line-color":"black",
        "line-width":3
      }
    })


  }




  constructor(private direcionsApi: DirectionsApiClient) { }
}
