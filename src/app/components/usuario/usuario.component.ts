import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//obtener el parametro (ID)

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  constructor(private router:ActivatedRoute){
    this.router.params.subscribe(parametros => {
      console.log('RUTA PADRE');
      console.log(parametros);
    })
  }



}
