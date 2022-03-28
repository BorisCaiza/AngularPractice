import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {RESTCountriesResponse} from '../interfaces/pais.interface'

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v2";
 
  
  
  constructor(private http: HttpClient) { }

    buscarPais(termino:string): Observable<RESTCountriesResponse[]>{
      const url = `${this.apiUrl}/name/${ termino }`;
      
      return this.http.get<RESTCountriesResponse[]>( url);
    }

    buscarCapital(termino:string): Observable<RESTCountriesResponse[]>{
      const url = `${this.apiUrl}/capital/${termino}`;
      
      return this.http.get<RESTCountriesResponse[]>( url);
    }

    getPaisPorAlpha(id:string): Observable<RESTCountriesResponse>{
      const url = `${this.apiUrl}/alpha/${id}`;
      
      return this.http.get<RESTCountriesResponse>( url);
    }

    buscarRegion(region: string):Observable<RESTCountriesResponse[]>{
      const url =  `https://restcountries.com/v3.1/region/${region}`;
      console.log(region)
      return this.http.get<RESTCountriesResponse[]>(url);

    }
   
  }

