import { Injectable } from '@angular/core';

import { Budget } from '../interfaces/budget';


@Injectable({
   providedIn: 'root'
})

export class PresupuestoService {

   precioParcial: number = 0;
   precioTotal  : number = 0;
   totalComplemento: number = 0;

   plantillaPpto: Budget = {
      web: 500,
      paginas: 1,
      idiomas: 1,
      complemento: 30,
      seo: 300,
      googleAds: 200,
      total: 0,
   };

   // totalPpto: Budget[] = []

   constructor() { };

   calculoPpto(evento: Event) {
      const value:any  = evento;

      switch (value.id) {
         case "flexCheckWeb": {
            (value.checked) ? (this.precioParcial += this.plantillaPpto.web)
               : (this.precioParcial -= this.plantillaPpto.web);
            this.modificarPpto(this.precioParcial, value.checked);
            break;
         }
         case "flexCheckSeo": {
            (value.checked) ? (this.precioParcial += this.plantillaPpto.seo)
               : (this.precioParcial -= this.plantillaPpto.seo);
            this.modificarPpto(this.precioParcial);
            break;
         }
         case "flexCheckAds": {
            (value.checked) ? (this.precioParcial += this.plantillaPpto.googleAds)
               : (this.precioParcial -= this.plantillaPpto.googleAds);
            this.modificarPpto(this.precioParcial);
            break;
         }
      };

   }

   modificarPpto(parcial: number, web?:boolean|undefined): void {
      this.precioTotal = parcial;
      this.totalComplemento = 0;
      (web) ? this.totalComplemento = this.plantillaPpto.paginas 
                                       * this.plantillaPpto.idiomas 
                                       * this.plantillaPpto.complemento
                                       : -(this.plantillaPpto.paginas 
                                          * this.plantillaPpto.idiomas 
                                          * this.plantillaPpto.complemento);

      this.plantillaPpto.total = this.precioTotal + this.totalComplemento;
   }


}
