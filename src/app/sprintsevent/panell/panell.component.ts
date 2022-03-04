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
      paginas: [1 , [Validators.required,  ] ],
      idiomas: [1 , [Validators.required,  ] ],
   })

   btnValor: number = 0;

   constructor( private presupuestoService: PresupuestoService, 
                  private fb: FormBuilder ) {}

   modificar( valor: number, origen: string ) {
      this.btnValor = Number(this.miFormulario.controls[origen].value);
      this.btnValor += valor;
      if ( this.btnValor < 1) { return; }
      this.miFormulario.controls[origen].patchValue(this.btnValor.toString());
   }
 
   inpTextChange(e: Event): void {
   // llamada a función presupuesto
   this.presupuestoService.arrayPpto[1] = Number(this.miFormulario.controls['paginas'].value);
   this.presupuestoService.arrayPpto[2] = Number(this.miFormulario.controls['idiomas'].value);   
   this.presupuestoService.calculoPpto( e );
   }

}