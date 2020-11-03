import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngsRoutingModule } from './ongs-routing.module';
import { OngComponent } from './ong/ong.component';
import { OngCardComponent } from './ong-card/ong-card.component';


@NgModule({
  declarations: [OngComponent, OngCardComponent],
  imports: [
    CommonModule,
    OngsRoutingModule
  ]
})
export class OngsModule { }
