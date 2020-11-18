import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { OngsRoutingModule } from './ongs-routing.module';
import { OngComponent } from './ong/ong.component';
import { OngCardComponent } from './ong-card/ong-card.component';
import { OngDetailComponent } from './ong-detail/ong-detail.component';

import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    OngComponent, 
    OngCardComponent, OngDetailComponent
 
  ],
  imports: [
    CommonModule,
    OngsRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class OngsModule { }
