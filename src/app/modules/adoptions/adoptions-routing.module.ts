import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdoptionsComponent } from './adoptions.component';
import { NewAdoptionComponent } from './new-adoption/new-adoption.component';
import { AdoptionDetailComponent } from './adoption-detail/adoption-detail.component'

const routes: Routes = [
  {
    path: '',
    component: AdoptionsComponent
  },
  {
    path: 'create',
    component: NewAdoptionComponent
  },
  {
    path: 'detail/:adoptionId',
    component: AdoptionDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdoptionsRoutingModule { }
