import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent {

  constructor(private router:ActivatedRoute){
  this.router.parent?.params.subscribe( parametros => {
    console.log('RUTA HIJA Usuario Detalle');
    console.log('parametros');
  })
  }

}
