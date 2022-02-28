import { Injectable } from '@angular/core';

import { Budget } from '../interfaces/budget';


@Injectable({
   providedIn: 'root'
})

export class PresupuestoService {

   plantillaPpto: Budget = {
      web: 500,
      paginas: 0,
      idiomas: 0,
      complemento: 30,
      seo: 300,
      googleAds: 200,
      total: 0,
   }

   precioTotal:number = 0;

   calculoPpto(evento: Event) {
      const value: any = evento;
      console.log(value.id, "mas  " + value.checked);

      switch (value.id) {
         case  "flexCheckWeb": {
            if (value.checked ){
               this.precioTotal += this.plantillaPpto.web;
            } else {
               this.precioTotal -= this.plantillaPpto.web;
            }
            break;
         }

         case "flexCheckSeo": {
            if (value.checked) {
               this.precioTotal += this.plantillaPpto.seo;
            } else {
               this.precioTotal -= this.plantillaPpto.seo;
            }
            break;
         }

         case "flexCheckAds": {
            if (value.checked ) {
               this.precioTotal += this.plantillaPpto.googleAds;
            } else {
               this.precioTotal -= this.plantillaPpto.googleAds;
            }
            break;
         }
         default: {
            //statements; 
            break;
         }
      }

      // mostrar precio total
      console.log("Presupuesto: " , this.precioTotal);
   }

   
   constructor() { }

}
