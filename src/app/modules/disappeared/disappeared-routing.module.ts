import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisappearedDetailComponent } from './disappeared-detail/disappeared-detail.component';


import { DisappearedComponent } from "./disappeared.component";

import { NewDisappearedComponent } from './new-disappeared/new-disappeared.component';


const routes: Routes = [
  {
    path: '',
    component: DisappearedComponent
  },
  {
    path: 'detail/:disappearedId',
    component: DisappearedDetailComponent
  },
  {
    path: 'create',
    component: NewDisappearedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisappearedRoutingModule { }
