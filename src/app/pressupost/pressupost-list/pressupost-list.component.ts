import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PresupuestoService } from '../services/presupuesto.service';
import { DbpttoService } from '../services/dbptto.service';



@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styles: []
})

export class PressupostListComponent implements OnInit {

   myForm: FormGroup = this.fb.group({ })

   doSomething() {}


  constructor(    private presupuestoService: PresupuestoService,
                  private dbpttoService: DbpttoService,
                  private fb: FormBuilder) { }

  ngOnInit(): void {
  }

 getPresupuestos (){
     this.dbpttoService.obtener_LocalStorage();

 }

}
