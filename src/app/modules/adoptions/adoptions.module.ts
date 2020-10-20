import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog'

import { AdoptionsRoutingModule } from './adoptions-routing.module';
import { AdoptionsComponent } from './adoptions.component';
import { NewAdoptionComponent } from './new-adoption/new-adoption.component';


@NgModule({
  declarations: [AdoptionsComponent, NewAdoptionComponent],
  imports: [
    CommonModule,
    AdoptionsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class AdoptionsModule { }
