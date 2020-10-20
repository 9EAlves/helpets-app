import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Adoption } from './../../core/models/adoption.model'
import { AdoptionsService } from './../../core/services/adoptions.service'
import { NewAdoptionComponent } from './new-adoption/new-adoption.component'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router';


@Component({
  selector: 'app-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.css']
})
export class AdoptionsComponent implements OnInit {

  private httpRequest: Subscription
  Adoptions: Adoption[]

  constructor(
    private dialog: MatDialog,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  openNewAdoptionModal(): void {
    this.route.navigate(['/create-adoption'])


  }
}
