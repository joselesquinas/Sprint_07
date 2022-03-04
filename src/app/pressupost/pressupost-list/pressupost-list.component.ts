import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PresupuestoService } from '../services/presupuesto.service';


@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styles: []
})

export class PressupostListComponent implements OnInit {

   //miFormulario: FormGroup = this.fb.group({
   //
   // })

    myForm: FormGroup = this.fb.group({

   })

   doSomething() {}

  constructor(   private presupuestoService: PresupuestoService,
                  private fb: FormBuilder) { }

  ngOnInit(): void {
  }


}
