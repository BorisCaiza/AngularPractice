import { Component, OnInit } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string [] = ['Africa', 'Americas', 'Asia', 'europe', 'Oceania'];
  regionActiva: string = '';
  paises: RESTCountriesResponse[] = [];
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getClaseCss(region: string): string{
    return (region == this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activaRegion(region: string){

    this.regionActiva = region;
  }

  acrivarRegion( region: string ) {
    
  
    region  = this.regionActiva;

    this.paisService.buscarRegion( region )
      .subscribe( (paises) => {
        console.log(paises)
        this.paises = paises;
        
      }, (err) => {
        this.paises   = [];
      });

  }

}
