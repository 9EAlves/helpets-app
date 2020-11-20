import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'

import { DisappearedCardComponent } from './disappeared-card/disappeared-card.component';
import { DisappearedDetailComponent } from './disappeared-detail/disappeared-detail.component';
import { ComponentsModule} from './../../components/components.module';
import { NewDisappearedComponent } from './new-disappeared/new-disappeared.component';
import { DisappearedRoutingModule } from './disappeared-routing.module';
import { DisappearedComponent } from './disappeared.component';



@NgModule({
  declarations: [DisappearedComponent, DisappearedCardComponent, DisappearedDetailComponent, NewDisappearedComponent],
  imports: [
    CommonModule,
    DisappearedRoutingModule,
    MatDividerModule,

    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    ComponentsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule
  ]
 
})
export class DisappearedModule { }
