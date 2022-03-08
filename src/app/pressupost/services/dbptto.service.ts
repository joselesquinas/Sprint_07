import { Injectable} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Presupuesto } from '../interfaces/budget';


@Injectable({
   providedIn: 'root'
 })

export class DbpttoService {

   keyPtto: string = 'Presupuestos';

   presupuestos: Presupuesto[] = [];

   constructor(   ) { }
   
   obtener_LocalStorage():any {
       try {
         return localStorage.getItem(this.keyPtto) ;
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

   almacenadoPttos  = [
      {
         "idPpto": "11111111",
         "nomCli": "Leanne Graham",
         "totalPpto": "200",
         "fecha": "08/03/2022",
       },
       {
         "idPpto": "22222222",
         "nomCli": "Ervin Howell",
         "totalPpto": "300",
         "fecha": "08/03/2021",
       },
       {
         "idPpto": "33333333",
         "nomCli": "Clementine Bauch",
         "totalPpto": "1030",
         "fecha": "07/02/2022",
       },
       {
         "idPpto": "44444444",
         "nomCli": "Patricia Lebsack",
         "totalPpto": "3000",
         "fecha": "08/03/2020",
       },
       {
         "idPpto": "55555555",
         "nomCli": "Chelsey Dietrich",
         "totalPpto": "2345",
         "fecha": "23/03/2022",
       },
       {
         "idPpto": "66666666",
         "nomCli": "Mrs. Dennis Schulist",
         "totalPpto": "5678",
         "fecha": "18/01/2022",
       },
       {
         "idPpto": "77777777",
         "nomCli": "Kurtis Weissnat",
         "totalPpto": "100000",
         "fecha": "88/12/2021",
       },
       {
         "idPpto": "88888888",
         "nomCli": "Nicholas Runolfsdottir V",
         "totalPpto": "900",
         "fecha": "20/08/2021",
       },
       {
         "idPpto": "99999999",
         "nomCli": "Glenna Reichert",
         "totalPpto": "2567",
         "fecha": "21/08/2021",
       },
       {
         "idPpto": "REFAAAAA",
         "nomCli": "Clementina DuBuque",
         "totalPpto": "1999",
         "fecha": "08/02/2022",
       }
   ];

   inputPttoEjemplo () {
      if ( localStorage.getItem( this.keyPtto) === null ) {
         for ( let i=0; i < this.almacenadoPttos.length; i++) {
            this.grabar_LocalStorage( this.keyPtto , this.almacenadoPttos[i] )
         }
         //console.log('NO Esta creada la key: ' + this.keyPtto);
      } else {
         console.log(' Creada la key');
      }
   }


}

