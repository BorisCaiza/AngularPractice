import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { HeroesService } from '../../services/heroes.service';
import { Heroe, Publisher } from '../heroe/interfaces/heroes.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img {
      width:100%;
      border-radius: 5px;
    }
    `


  ]
})
export class AgregarComponent implements OnInit {

  publishers = [

    {id:'DC Comics',
    desc:'DC - Comics'},

    {id:'Marvel Comics',
    desc:'Marvel - Comics'}
  ]

  heroe: Heroe = {
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_img:'',
  }

  constructor(private heroesService: HeroesService, 
    
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private snackbar: MatSnackBar,
    private matDialog: MatDialog) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return;
    }

    this.activatedRoute.params.pipe(switchMap(({id})=> this.heroesService.getHeroePorId(id)))
    .subscribe(heroe => this.heroe = heroe);
  }

  guardar(){
    if( this.heroe.superhero.trim().length ===0){
      return;
    }

    if(this.heroe.id){
      //actualizar
      this.heroesService.actualizarHeroe(this.heroe)
      .subscribe(heroe =>this.mostrarSnackBar('Registro Actualizado'))
    }else{
      this.heroesService.agregarHeroe(this.heroe).
    subscribe(
      heroe => {this.router.navigate(['/heroes']);
      this.mostrarSnackBar('Registro Actualizado')}
    );
    }

  }

  borrar(){
   const dialog = this.matDialog.open(ConfirmarComponent, {
     width:'250px',
     data: this.heroe
   });

   dialog.afterClosed().subscribe(
     (result) => {
       if(result){
        this.heroesService.borrarHeroe( this.heroe.id!)
        .subscribe( resp =>  {
            this.router.navigate(['/heroes']);
          });
       }
        }      
   )
      }
  


mostrarSnackBar(mensaje: string){
this.snackbar.open(mensaje, 'ok!', {
  duration: 2500
});

  }

}
