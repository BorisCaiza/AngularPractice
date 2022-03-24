import { Component, OnInit } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: RESTCountriesResponse[] = [];

  constructor(private paisService: PaisService) { }


  buscar( termino: string ) {
    
    this.hayError = false;
    this.termino  = termino;

    this.paisService.buscarCapital( termino )
      .subscribe( (paises) => {
        this.paises = paises;
        
      }, (err) => {
        this.hayError = true;
        this.paises   = [];
      });

  }




}
