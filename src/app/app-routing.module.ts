import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'adoptions',
    loadChildren: () => import('./modules/adoptions/adoptions.module').then(module => module.AdoptionsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(module => module.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }