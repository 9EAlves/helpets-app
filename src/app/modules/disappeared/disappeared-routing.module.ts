import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisappearedComponent} from "./disappeared.component";

const routes: Routes = [
  {
    path: '',
    component: DisappearedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisappearedRoutingModule { }
