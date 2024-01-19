import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//Obtener el parámetro (id)

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent {

  constructor( private router:ActivatedRoute ){
    this.router.parent?.params.subscribe( parametros => {
      console.log('RUTA HIJA Usuario Editar');
      console.log('parametros');
    })
  }

}
