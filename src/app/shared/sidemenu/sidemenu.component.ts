import { Component, OnInit } from '@angular/core';
import { DbpttoService } from '../../pressupost/services/dbptto.service';

interface MenuItem {
   texto: string;
   ruta: string;
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})

export class SidemenuComponent implements OnInit {

   templateMenu: MenuItem [] = [
      {
         texto: 'Prólogo',
         ruta: './pressupost/prologo'
      },
      {
         texto: 'Cálculo',
         ruta: './pressupost/home'
      },
      {
         texto: 'Listado',
         ruta: './pressupost/pressupost'
      },
   ];


  constructor() { }

  ngOnInit(): void {

  }

}
