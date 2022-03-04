import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
      path: 'pressupost',
      loadChildren: () => import('./pressupost/pressupost.module').then(m => m.PressupostModule ),
   },
   {
      path: '**',
      redirectTo: 'pressupost'
   }
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes)
   ],
  exports: [
     RouterModule
   ]   
})

export class AppRoutingModule { }
