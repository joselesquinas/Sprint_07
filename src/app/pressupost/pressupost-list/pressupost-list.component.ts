import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DbpttoService } from '../services/dbptto.service';
import { Presupuesto } from '../interfaces/budget';


@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styles: []
})

export class PressupostListComponent implements OnInit {

   myForm: FormGroup = this.fb.group({ });
 
   constructor(   
      private dbpttoService: DbpttoService,
      private fb: FormBuilder) {}

   ngOnInit(): void {
      this.getPttoRef();
   }
 
   presupuestos: Presupuesto [] = [];

   getPttoRef() {
      this.presupuestos  =  JSON.parse(this.dbpttoService.obtener_LocalStorage());
      this.presupuestos.sort(function (a, b) {
         if (a.idPpto > b.idPpto) {
            return 1;
         }
         if (a.idPpto < b.idPpto) {
            return -1;
         }
         // a igual b
         return 0;
      });
        // console.log(this.presupuestos);        
   }

   getPttoCliente() {
      this.presupuestos  =  JSON.parse(this.dbpttoService.obtener_LocalStorage());
      this.presupuestos.sort(function (a, b) {
      if (a.nomCli > b.nomCli) {
         return 1;
      }
      if (a.nomCli < b.nomCli) {
         return -1;
      }
      // a igual b
      return 0;
      });
      // console.log(this.presupuestos);
   }

   getPttoDate() {
      this.presupuestos  =  JSON.parse(this.dbpttoService.obtener_LocalStorage());
      this.presupuestos.sort(function (a, b) {
         return new Date(a.fecha).getTime() - new Date(b.fecha).getTime(); 
      });
      console.log(this.presupuestos);
       
   }
 
}
