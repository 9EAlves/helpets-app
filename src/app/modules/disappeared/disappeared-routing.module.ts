import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisappearedDetailComponent } from './disappeared-detail/disappeared-detail.component';

import { DisappearedComponent} from "./disappeared.component";

const routes: Routes = [
  {
    path: '',
    component: DisappearedComponent
  },
  {
    path: 'detail/:disappearedId',
    component: DisappearedDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisappearedRoutingModule { }
