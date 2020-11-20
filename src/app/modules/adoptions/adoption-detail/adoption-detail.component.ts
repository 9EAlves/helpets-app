import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Adoption } from './../../../core/models/adoption.model';
import { AdoptionsService } from './../../../core/services/adoptions.service'


@Component({
  selector: 'app-adoption-detail',
  templateUrl: './adoption-detail.component.html',
  styleUrls: ['./adoption-detail.component.css']
})
export class AdoptionDetailComponent implements OnInit, OnDestroy {

  private HttpRequest: Subscription
  Adoption: Adoption

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private _adoptionService: AdoptionsService
  ) { }

  ngOnInit(): void {
    const adoptionId = this.ActivatedRoute.snapshot.params['adoptionId']
    this.findDisappearedById(adoptionId)
  }

  ngOnDestroy(): void {
    this.HttpRequest.unsubscribe()
  }

  findDisappearedById(adoptionId: String): void {
    this.HttpRequest = this._adoptionService.findAdoptionById(adoptionId).subscribe(response => {
      this.Adoption = response.body['data']
      console.log(response.body['data'])
    }, err => {
      console.log(err)
    })
  }

}
