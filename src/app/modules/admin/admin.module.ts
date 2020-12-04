import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import { AdoptionsModule } from './../adoptions/adoptions.module'

import { AdminRoutingModule } from './admin-routing.module';

import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AdminAdoptionsComponent } from './admin-adoptions/admin-adoptions.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminDisappearedComponent } from './admin-disappeared/admin-disappeared.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [AdminAdoptionsComponent, AdminDisappearedComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,   
    MatCardModule,
    MatDialogModule,
    RouterModule,
    MatIconModule
  ]
})
export class AdminModule { }
