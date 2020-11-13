import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';


import { DisappearedRoutingModule } from './disappeared-routing.module';
import { DisappearedComponent } from './disappeared.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';


import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { DisappearedCardComponent } from './disappeared-card/disappeared-card.component';
import { DisappearedDetailComponent } from './disappeared-detail/disappeared-detail.component';
import { ComponentsModule} from './../../components/components.module';




@NgModule({
  declarations: [DisappearedComponent, DisappearedCardComponent, DisappearedDetailComponent],
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
    MatInputModule
  ]
 
})
export class DisappearedModule { }
