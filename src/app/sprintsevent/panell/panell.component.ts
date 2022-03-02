import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';

import { PresupuestoService } from '../services/presupuesto.service';


@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.sass']
})

export class PanellComponent implements OnInit {

   numPag: number = 0;
   numIdi: number = 0;

   @ViewChild('txtPagina') txtPagina!: ElementRef<HTMLInputElement>;
   @ViewChild('txtImage')  txtImage! : ElementRef<HTMLInputElement>;

   constructor(  private presupuestoService: PresupuestoService)  { }

   acumularPag( valor: number ) {
      this.numPag = Number(this.txtPagina.nativeElement.value);
      (this.numPag >= 0  ) ?  this.numPag += valor : this.numPag = 0 ;
   }

   acumularIdi( valor: number ) {
      this.numIdi = Number(this.txtImage.nativeElement.value);
      ( this.numIdi >= 0  ) ?  this.numIdi += valor : this.numIdi = 0 ;
   }
   


  ngOnInit(): void {
  }

}