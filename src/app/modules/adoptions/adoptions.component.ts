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
  hasError: boolean = false

  constructor(
    private _adoptionsService: AdoptionsService
  ) { }

  ngOnInit(): void {
    this._adoptionsService.params = this._adoptionsService.params.set('columnSort', 'createdAt')
    this._adoptionsService.params = this._adoptionsService.params.set('valueSort', 'descending')

    this.findAllAdoptions()
  }

  findAllAdoptions(): void {
    this.httpRequest = this._adoptionsService.findAllAdoptions().subscribe(response => {
      this.Adoptions = response.body['data']
    }, err => {
      this.hasError = true
    })
  }

}
