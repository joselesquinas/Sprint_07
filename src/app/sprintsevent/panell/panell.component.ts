import { Component, OnInit } from '@angular/core';

import { PresupuestoService } from '../services/presupuesto.service';


@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.sass']
})

export class PanellComponent implements OnInit {

   numPag: number = 0;
   numIdi: number = 0;

   acumularPag( valor: number ) {
      this.numPag += valor;
   }
   acumularIdi( valor: number ) {
      this.numIdi += valor;
   }
   
  constructor(  private presupuestoService: PresupuestoService)  { }

  ngOnInit(): void {
  }

}
