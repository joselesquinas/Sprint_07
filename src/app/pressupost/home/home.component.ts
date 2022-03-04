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
      web: [false],
      seo: [false],
      ads: [false],
      nomPpto: ['', [Validators.required, Validators.minLength(8)]],
      nomCliente: ['', Validators.required],
   })

   constructor(
      private presupuestoService: PresupuestoService,
      private fb: FormBuilder) { }


   spanTotal: string = '0';

   // mostrar template panell
   irPanell: boolean = false;
   mostrarPanell() {
      this.irPanell;
   }

   onCheckboxChange(e: Event): void {
      const value = e.currentTarget as HTMLInputElement;

      if (value.id === "flexCheckWeb") {
         // mostrar template panell
         this.irPanell = value.checked;
      }

      switch (value.id) {
         case "flexCheckWeb": {
            if (value.checked ) {
               this.presupuestoService.arrayPpto[0] = 500;
            }  else { 
                  this.presupuestoService.arrayPpto[0] = 0; 
                  this.presupuestoService.arrayPpto[1] = 1; 
                  this.presupuestoService.arrayPpto[2] = 1;
                  this.presupuestoService.arrayPpto[6] = 0; 
            }
            break;
         }
         case "flexCheckSeo": {
            if (value.checked) {
               this.presupuestoService.arrayPpto[4] = 300;
            }  else { this.presupuestoService.arrayPpto[4] = 0; }
            break;
         }
         case "flexCheckAds": {
            if (value.checked) {
               this.presupuestoService.arrayPpto[5] = 200;
            }  else { this.presupuestoService.arrayPpto[5] = 0; }
            break;
         }
      };

      // llamada a función presupuesto
      this.presupuestoService.calculoPpto(e);
   }
   recivirCalculo() {
      this.spanTotal = ( this.presupuestoService.arrayPpto[6]).toString();
   }

   campoEsValido(campo: string) {
      return this.miFormulario.controls[campo].errors
         && this.miFormulario.controls[campo].touched;
   }

}
