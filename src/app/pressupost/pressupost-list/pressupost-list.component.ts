import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Presupuesto } from '../interfaces/budget';
import { DbpttoService } from '../services/dbptto.service';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styles: []
})

export class PressupostListComponent implements OnInit {

   presupuestos: Presupuesto[] = [];

   myForm: FormGroup = this.fb.group({ });

   constructor(   
      private dbpttoService: DbpttoService,
      private fb: FormBuilder) {}

   ngOnInit(): void {}

   getPresupuestos() {
   
  
       console.log(localStorage.getItem('Presupuestos'));  
       // console.log(localStorage.getItem('Presupuestos'));
   }




  
}
