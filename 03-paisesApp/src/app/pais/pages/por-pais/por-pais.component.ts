import { Component, OnInit } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    ` li{
      cursor: pointer;
    }

    `
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: RESTCountriesResponse[] = [];
  paisesSugeridos: RESTCountriesResponse[] = [];

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
    

    this.paisService.buscarPais(termino).subscribe(
      paises => this.paisesSugeridos = paises.splice(0,3),
      (err) => this.paisesSugeridos = []);
  }

}
