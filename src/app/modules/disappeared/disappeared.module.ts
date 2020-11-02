import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisappearedRoutingModule } from './disappeared-routing.module';
import { DisappearedComponent } from './disappeared.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { DisappearedCardComponent } from './disappeared-card/disappeared-card.component';
import { DisappearedDetailComponent } from './disappeared-detail/disappeared-detail.component';





@NgModule({
  declarations: [DisappearedComponent, DisappearedCardComponent, DisappearedDetailComponent],
  imports: [
    CommonModule,
    DisappearedRoutingModule,
    MatDividerModule,

    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    
  ]
 
})
export class DisappearedModule { }
