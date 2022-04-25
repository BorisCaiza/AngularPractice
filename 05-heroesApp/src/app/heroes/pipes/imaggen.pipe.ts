import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../pages/heroe/interfaces/heroes.interfaces';

@Pipe({
  name: 'imaggen',
  pure: false
})
export class ImaggenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    console.log("Pipe imagen se procesó");

    if(!heroe.id && !heroe.alt_img){
      return 'assets/no-image.png';
    }else if(heroe.alt_img){
      return heroe.alt_img;
    }else{
      return `assets/heroes/${heroe.id}.jpg`;
    }
   }
    //assets/heroes/{{heroe.id}}.jpg
  }


