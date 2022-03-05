import { Injectable} from '@angular/core';

// import { presupuesto } from '../interfaces/budget';
// import { PresupuestoService } from './presupuesto.service';

@Injectable({
  providedIn: 'root'
})


export class DbpttoService {

   constructor() {
   }
            // var stringified = JSON.stringify(data);
            // var parsedObj = JSON.parse(stringified);
            //  

      grabar_localstorage( id: string, data: {} ) {

         localStorage.setItem( 'id2', JSON.stringify ( data ));

      }


   obtener_localstorage() {

      let data = localStorage.getItem('id2');

      console.log(data);

   }




}

