import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { PresupuestoService } from '../services/presupuesto.service';


@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.sass']
})

export class PanellComponent {

   miFormulario: FormGroup = this.fb.group({
      paginas: [0 , Validators.required ],
      idiomas: [0 , Validators.required ],
   })

   constructor(
      private presupuestoService: PresupuestoService, 
      private fb: FormBuilder ) {}

}