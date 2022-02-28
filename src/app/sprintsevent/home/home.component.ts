import { Component, OnInit } from '@angular/core';

import { PresupuestoService } from '../services/presupuesto.service';


@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {
   // Template interpolación precios
   labelWeb: string = (this.presupuestoService.plantillaPpto.web).toString();
   labelSeo: string = (this.presupuestoService.plantillaPpto.seo).toString();
   labelAds: string = (this.presupuestoService.plantillaPpto.googleAds).toString();
   spanTotal: string ='0';
   
   // mostrar template panell
   irPanell: boolean = false;
   mostrarPanell() {
      this.irPanell
   }

   onCheckboxChange(e: Event): void {
      const value: any = e.currentTarget;
      if (value.id === "flexCheckWeb") {
         this.irPanell = value.checked;
      }
      // llamada a función presupuesto
      this.presupuestoService.calculoPpto(value);
      this.spanTotal = (this.presupuestoService.plantillaPpto.total).toString();
   }

   constructor(private presupuestoService: PresupuestoService) { }

   ngOnInit(): void { }

}
