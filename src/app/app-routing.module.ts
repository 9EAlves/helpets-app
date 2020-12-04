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
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'ong',
    loadChildren: () => import('./modules/ongs/ongs.module').then(module => module.OngsModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about-us/about-us.module').then(module => module.AboutUsModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }