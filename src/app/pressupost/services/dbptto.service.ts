import { Injectable} from '@angular/core';

import { Presupuesto } from '../interfaces/budget';


@Injectable({
   providedIn: 'root'
 })

export class DbpttoService {

   presupuestos: Presupuesto[] = [];

      // {idPpto: 'REF:1234',  nomCli: 'Alberto Gomez', totalPpto:  1500, fecha: '02/02/2222'}];

   constructor(   ) { }
   
   obtener_LocalStorage():any {
       try {
         return localStorage.getItem('Presupuestos') ;
       } catch (e) {
            console.log(e);     
       }
   }

   grabar_LocalStorage( newId: string, data: any  ): void {
      try {
         this.presupuestos.push(data);
         localStorage.setItem( newId, JSON.stringify( this.presupuestos ));
       } catch (e) {
          console.log(e);     
       }
   }



   // var stringified = JSON.stringify(data);
   // var parsedObj = JSON.parse(stringified);
   //



}

