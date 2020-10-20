import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdoptionsRoutingModule } from './adoptions-routing.module';
import { AdoptionsComponent } from './adoptions.component';


@NgModule({
  declarations: [AdoptionsComponent],
  imports: [
    CommonModule,
    AdoptionsRoutingModule
  ]
})
export class AdoptionsModule { }
