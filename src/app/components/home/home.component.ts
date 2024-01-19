import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  
  <app-css></app-css>

  <app-clases></app-clases>

  <p [appResaltado]="'orange'" >
    Hola Mundo
  </p>

  <app-ng-switch></app-ng-switch>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
