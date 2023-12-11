import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': tamano + 'px'}">
      Hola mundo ..esta es una etiqueta
    </p>
    <p [style.fontSize.px]="tamano">
      Hola Brigitte
    </p>
    <button class="btn btn-primary" (click)="tamano = tamano + 5">
    Aumente el tamaño de la letra
    </button>

    <button class="btn btn-primary" (click)="tamano = tamano - 5">
    Disminuya el tamaño de la letra
    </button>

  `,
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {

  tamano:number =30;

}
