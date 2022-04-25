import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../pages/heroe/interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroe-tarjeta-component',
  templateUrl: './heroe-tarjeta-component.component.html',
  styles: [
    `
    mat-card {
      margin-top: 20px;
    } `
  ]
})
export class HeroeTarjetaComponentComponent  {

  @Input() heroe!: Heroe;
  constructor() { }

 

}
