import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PresupuestoService } from '../services/presupuesto.service';


@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.sass']
})

export class HomeComponent {

   miFormulario: FormGroup = this.fb.group({
      web: [0],
      seo: [0],
      ads: [0],
      nomPpto: ['', [Validators.required, Validators.minLength(8)]],
      nomCliente: ['', Validators.required],
   })

   constructor(
      private presupuestoService: PresupuestoService,
      private fb: FormBuilder) { }


   campoEsValido(campo: string) {
      return this.miFormulario.controls[campo].errors
         && this.miFormulario.controls[campo].touched;
   }


   // Template interpolación precios
   labelWeb: string = (this.presupuestoService.plantillaPpto.web).toString();
   labelSeo: string = (this.presupuestoService.plantillaPpto.seo).toString();
   labelAds: string = (this.presupuestoService.plantillaPpto.googleAds).toString();
   spanTotal: string = '0';

   // mostrar template panell
   irPanell: boolean = false;
   mostrarPanell() {
      this.irPanell;
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

}
