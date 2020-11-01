import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Subscription } from 'rxjs';
import { Adoption } from './../../../core/models/adoption.model'
import { AdoptionsService } from './../../../core/services/adoptions.service'
import { Specie } from './../../../core/models/species.model'
import { SpeciesService } from './../../../core/services/species.service'

@Component({
  selector: 'app-new-adoption',
  templateUrl: './new-adoption.component.html',
  styleUrls: ['./new-adoption.component.css']
})
export class NewAdoptionComponent implements OnInit, OnDestroy {

  private httpRequest: Subscription

  _adoptionFormGroup: FormGroup
  _isNewCria: boolean = false
  _species: Specie[]

  @ViewChild('autosize') autosize: CdkTextareaAutosize

  constructor(
    private _speciesService: SpeciesService,
    private _builder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.findAllSpecies()
    this.initializeAdoptionFormGroup()
  }

  ngOnDestroy(): void {
    this.httpRequest.unsubscribe()
  }

  findAllSpecies(): void {
    this.httpRequest = this._speciesService.findAllSpecie().subscribe(response => {
      this._species = response.body['data']
    }, err => {
      console.log(err.error['message'])
    })
  }

  initializeAdoptionFormGroup(): void {
    this._adoptionFormGroup = this._builder.group({
      publication_type: this._builder.control(null),
      pet_name: this._builder.control(null),
      species: this._builder.control(null),
      gender: this._builder.control(null),
      maturity: this._builder.control(null),
      castred: this._builder.control(null),
      quantity: this._builder.control(null),
      description: this._builder.control(null)
    })
  }

  createNewAdoption(): void {

  }


  nextStep(): void {
    if (this._adoptionFormGroup.value['publication_type'] == 'cria') {
      this._isNewCria = true
    }
    console.log(this._isNewCria)
  }

  closeForm(): void {

  }

  get publication_type() { return this._adoptionFormGroup.get('publication_type') } /*ok*/
  get pet_name() { return this._adoptionFormGroup.get('pet_name') } /*ok*/
  get species() { return this._adoptionFormGroup.get('species') } /*ok*/
  get gender() { return this._adoptionFormGroup.get('gender') } /*ok*/
  get maturity() { return this._adoptionFormGroup.get('maturity') }
  get castred() { return this._adoptionFormGroup.get('castred') }
  get quantity() { return this._adoptionFormGroup.get('quantity') }
  get description() { return this._adoptionFormGroup.get('description') }

}
