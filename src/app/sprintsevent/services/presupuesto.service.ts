import { Injectable } from '@angular/core';

import { Budget } from '../interfaces/budget';


@Injectable({
   providedIn: 'root'
})

export class PresupuestoService {

   precioParcial   : number = 0;
   precioTotal     : number = 0;
   totalComplemento: number = 0;

   plantillaPpto: Budget = {
      web        : 0,
      paginas    : 1,
      idiomas    : 1,
      complemento: 30,
      seo        : 0,
      googleAds  : 0,
      total      : 0,
   };

   // totalPpto: Budget[] = []
   arrayPpto = Object.values(this.plantillaPpto);

   constructor() { };


   calculoPpto( evento: Event ) {
      const value = evento.currentTarget as HTMLInputElement;
      console.log(value.id);
      this.precioParcial = 0;
      this.precioTotal = 0;
      this.totalComplemento = 0;
      this.arrayPpto[6] = 0;

      this.totalComplemento = Number(this.arrayPpto[1])
                              * Number(this.arrayPpto[2])
                              * Number(this.arrayPpto[3]);

      if ( Number(this.arrayPpto[0]) !== 0 ) { 
         this.precioParcial =  Number(this.arrayPpto[0]) + this.totalComplemento ;  
      } 
      else { this.precioParcial = 0 ;}

      this.precioTotal =  this.precioParcial + Number(this.arrayPpto[4]) + Number(this.arrayPpto[5]);

      this.arrayPpto[6] = this.precioTotal; 

    console.log( this.arrayPpto );

   }

}
