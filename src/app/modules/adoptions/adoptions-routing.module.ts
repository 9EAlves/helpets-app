import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdoptionsComponent } from './adoptions.component';

const routes: Routes = [
  {
    path: '',
    component: AdoptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdoptionsRoutingModule { }
