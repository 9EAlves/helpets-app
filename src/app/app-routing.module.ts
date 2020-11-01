import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'adoptions',
    loadChildren: () => import('./modules/adoptions/adoptions.module').then(module => module.AdoptionsModule)
  },
  {
    path: 'disappeared',
    loadChildren: () => import('./modules/disappeared/disappeared.module').then(module => module.DisappearedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }