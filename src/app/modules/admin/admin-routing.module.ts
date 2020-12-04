import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAdoptionsComponent } from './admin-adoptions/admin-adoptions.component';
import { AdminDisappearedComponent } from './admin-disappeared/admin-disappeared.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'adoptions',
    component: AdminAdoptionsComponent
  },
  {
    path: 'disappeared',
    component: AdminDisappearedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
