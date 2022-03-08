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


   ngOnInit(): void {}

   //presupuestos: Presupuesto [] = [];
 
   presupuestos: Presupuesto [] = [];


   getPresupuestos() {
        this.presupuestos  =  JSON.parse(this.dbpttoService.obtener_LocalStorage());
         console.log(this.presupuestos);
         
   }


   




  
}
