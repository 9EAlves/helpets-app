import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisappearedRoutingModule } from './disappeared-routing.module';
import { DisappearedComponent } from './disappeared.component';


@NgModule({
  declarations: [DisappearedComponent],
  imports: [
    CommonModule,
    DisappearedRoutingModule
  ]
})
export class DisappearedModule { }
