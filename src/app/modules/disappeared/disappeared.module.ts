import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisappearedRoutingModule } from './disappeared-routing.module';
import { DisappearedComponent } from './disappeared.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [DisappearedComponent],
  imports: [
    CommonModule,
    DisappearedRoutingModule,
    MatDividerModule,

    MatSelectModule
  ]
 
})
export class DisappearedModule { }
