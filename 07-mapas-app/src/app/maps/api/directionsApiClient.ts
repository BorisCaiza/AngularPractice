import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';




@Injectable({
    providedIn: 'root'
})
export class DirectionsApiClient extends HttpClient {

    public baseUrl: string = 'https://api.mapbox.com/directions/v5/mapbox/driving';

    constructor( handler: HttpHandler ){
        super(handler);
    }

    public override get<T>( url: string ) {

        url = this.baseUrl + url;

        return super.get<T>( url, {
            params: {
                alternatives: false,
                geometries: 'geojson',
                language: 'es',
                overview: 'simplified',
                steps: false,
                access_token: 'pk.eyJ1IjoiYm9yaXNjMjAwMCIsImEiOiJjbGdhM28zY2YwNHg0M2RwcHNrODRvaW15In0.4k23MjD3RQhsQNguA9yerA'
            }
        });


    }

}