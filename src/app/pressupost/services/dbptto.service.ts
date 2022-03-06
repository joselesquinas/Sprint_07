import { Injectable} from '@angular/core';

import { Presupuesto } from '../interfaces/budget';


@Injectable({
   providedIn: 'root'
 })

export class DbpttoService {

    presupuestos: Presupuesto[] = [];

      // {idPpto: 'REF:1234',  nomCli: 'Alberto Gomez', totalPpto: // 1500, fecha: '02/02/2222'}];

   constructor(   ) { }
   
     obtener_LocalStorage( ) {
       try {

         console.log(localStorage.getItem('Presupuestos'));

       } catch (e) {
          console.log(e);     
       }
    }

    grabar_LocalStorage( newId: string, data: any ) {

      this.presupuestos.push(data);
      // console.log(this.presupuestos);

      localStorage.setItem( newId, JSON.stringify( this.presupuestos ));
   }

   // grabar_LocalStorage( newId: string, data: {} ) {
   //       try {
   //         localStorage.setItem( newId, JSON.stringify ( data ));
   //       } catch (e) {
   //          console.log(e);
   //       }
   // }



   // var stringified = JSON.stringify(data);
   // var parsedObj = JSON.parse(stringified);
   //



}

