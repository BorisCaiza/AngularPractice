import { Component, OnInit } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: RESTCountriesResponse[] = [];

  constructor(private paisService: PaisService) { }


  buscar( termino: string ) {
    
    this.hayError = false;
    this.termino  = termino;

    this.paisService.buscarPais( termino )
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;
        
      }, (err) => {
        this.hayError = true;
        this.paises   = [];
      });

  }

  sugerencias( termino: string){
    this.hayError = false;
    //TODO: crer sugerencias,.
  }

}
