import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisappearedRoutingModule } from './disappeared-routing.module';
import { DisappearedComponent } from './disappeared.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';



@NgModule({
  declarations: [DisappearedComponent],
  imports: [
    CommonModule,
    DisappearedRoutingModule,
    MatDividerModule,
    MatBottomSheetModule
  ]
 
})
export class DisappearedModule { }
