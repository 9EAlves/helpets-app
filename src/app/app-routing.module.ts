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
  },
  {
    path: 'login-user',
    loadChildren: () => import('./modules/login-user/login-user.module').then(module => module.LoginUserModule)
  },
  {
    path: 'new-user',
    loadChildren: () => import('./modules/new-user/new-user.module').then(module => module.NewUserModule)
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