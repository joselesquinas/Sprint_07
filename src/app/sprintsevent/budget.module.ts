import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { PanellComponent } from './panell/panell.component';
import { PressupostListComponent } from './pressupost-list/pressupost-list.component';
import { PresupuestoService } from './services/presupuesto.service';

@NgModule({
  declarations: [
   HomeComponent,
   PanellComponent,
   PressupostListComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
   PresupuestoService
  ]
})

export class BudgetModule { }
