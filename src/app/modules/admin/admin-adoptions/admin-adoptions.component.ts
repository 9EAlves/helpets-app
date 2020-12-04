import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Adoption } from './../../../core/models/adoption.model';
import { AdoptionsService } from './../../../core/services/adoptions.service';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-adoptions',
  templateUrl: './admin-adoptions.component.html',
  styleUrls: ['./admin-adoptions.component.css']
})
export class AdminAdoptionsComponent implements OnInit, OnDestroy {

  @Input() Adoption: Adoption

  private HttpRequest: Subscription
  Adoptions: Adoption[]
  hasError: boolean = false

  constructor(
    private dialog: MatDialog,
    private route: Router,
    private _adoptionsService: AdoptionsService
  ) { }

  ngOnInit(): void {
    console.log(this.Adoption)
    this.findAllAdoptions()
  }

  findAllAdoptions(): void {
    this.HttpRequest = this._adoptionsService.findAllAdoptions().subscribe(response => {
      this.Adoptions = response.body['data']
      console.log(response)
    }, err => {
      this.hasError = true
    })
  }

  
  ngOnDestroy(): void {
    this.HttpRequest.unsubscribe()
  }

  updateAdoptions(adoptionId: String){
    this.HttpRequest = this._adoptionsService.updateAdoptionById(adoptionId, null).subscribe(response => {
    this.findAllAdoptions()
    }, err =>{
      console.log(err)
    })
  }
  deleteAdoptions(adoptionId: String){
      this.HttpRequest = this._adoptionsService.deleteAdoptionById(adoptionId).subscribe(response => {
    this.findAllAdoptions()
      }, err =>{
        console.log(err)
      })
  }


}
