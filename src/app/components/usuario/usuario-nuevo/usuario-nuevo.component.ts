import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//Obtener los parámetros (ID)

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent {

  constructor( private router:ActivatedRoute){
    this.router.parent?.params.subscribe( parametros => {//Agregando la palabra parent se obtiene todos los parámetros que recibe el PADRE
      console.log('RUTA HIJA Usuario Nuevo');
      console.log('parametros');
    })
  }

}
