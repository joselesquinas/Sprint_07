import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrologoComponent } from './prologo/prologo.component';
import { HomeComponent } from './home/home.component';
import { PanellComponent } from './panell/panell.component';
import { PressupostListComponent } from './pressupost-list/pressupost-list.component';


const routes: Routes = [
   {
      path: '',
      children: [
         { path: 'prologo', component: PrologoComponent },
         { path: 'home', component: HomeComponent },
         { path: 'pressupost', component: PressupostListComponent },
         { path: 'panell', component: PanellComponent },
         { path: '**', redirectTo: 'prologo' }
      ],      
   }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PressupostRoutingModule { }
