import { OngDetailComponent } from './ong-detail/ong-detail.component';

import { OngComponent } from './ong/ong.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OngComponent
  },
  {
    path: 'detail/:userId',
    component: OngDetailComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OngsRoutingModule { }
