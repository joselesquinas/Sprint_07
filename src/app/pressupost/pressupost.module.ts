import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PressupostRoutingModule } from './pressupost-routing.module';
import { PrologoComponent } from './prologo/prologo.component';
import { HomeComponent } from './home/home.component';
import { PanellComponent } from './panell/panell.component';
import { PressupostListComponent } from './pressupost-list/pressupost-list.component';
import { PresupuestoService } from './services/presupuesto.service';




@NgModule({
  declarations: [
    PrologoComponent,
    HomeComponent,
    PanellComponent,
    PressupostListComponent
    
  ],
  exports: [
   HomeComponent
  ],
  imports: [
    CommonModule,
    PressupostRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
   PresupuestoService
  ]
})
export class PressupostModule { }
