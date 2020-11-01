import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog'
import { MatStepperModule } from '@angular/material/stepper'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { AdoptionsRoutingModule } from './adoptions-routing.module';
import { AdoptionsComponent } from './adoptions.component';
import { NewAdoptionComponent } from './new-adoption/new-adoption.component';


@NgModule({
  declarations: [AdoptionsComponent, NewAdoptionComponent],
  imports: [
    CommonModule,
    AdoptionsRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AdoptionsModule { }
