import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string [] = ['africa','americas','asia','europe','oceania']
  regionActiva: string = '';
  constructor() { }

  ngOnInit(): void {
  }


  activaRegion(region: string){

    this.regionActiva = region;
  }

}
