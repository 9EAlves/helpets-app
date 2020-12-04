import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Subscription } from 'rxjs';
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
  _adoptionIndividualFormGroup: FormGroup
  _adoptionCriaFormGroup: FormGroup
  _isNewCria: boolean = false
  _species: Specie[]

  @ViewChild('autosize') autosize: CdkTextareaAutosize

  constructor(
    private _speciesService: SpeciesService,
    private _adoptionsService: AdoptionsService,
    private _builder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.findAllSpecies()
    this.initializeAdoptionFormGroup()
    this.initializeAdoptionIndividualFormGroup()
    this.initializeAdoptionCriaFormGroup()
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
      species: this._builder.control(null)
    })
  }

  initializeAdoptionIndividualFormGroup(): void {
    this._adoptionIndividualFormGroup = this._builder.group({
      publication_type: this._builder.control(null),
      species: this._builder.control(null),
      pet_name: this._builder.control(null),
      gender: this._builder.control(null),
      maturity: this._builder.control(null),
      castred: this._builder.control(null),
      description: this._builder.control(null, [Validators.required]),
      image: this._builder.control('.', [Validators.required]),
      rated: this._builder.control(false),
      user: this._builder.control('5f7f8edf64e491068053a9f7', [Validators.required])
    })
  }

  initializeAdoptionCriaFormGroup(): void {
    this._adoptionCriaFormGroup = this._builder.group({
      publication_type: this._builder.control(null),
      species: this._builder.control(null),
      quantity_male: this._builder.control(null),
      quantity_female: this._builder.control(null),
      data_nascimento: this._builder.control(null),
      description: this._builder.control(null, [Validators.required]),
      image: this._builder.control('.', [Validators.required]),
      rated: this._builder.control(false),
      user: this._builder.control('5f7f8edf64e491068053a9f7', [Validators.required])
    })
  }

  createNewAdoption(form: FormGroup): void {
    this.httpRequest = this._adoptionsService.createAdoption(form.value).subscribe(response => {
      console.log(`Sua publicação foi cadastrada com sucesso`)
      this.closeForm()
    }, err => {
      console.log(form.value)
      this.closeForm()
    })
  }

  initForm(): void {
    if (this._adoptionFormGroup.value['publication_type'] == 'cria') {
      this._isNewCria = true
      this._adoptionCriaFormGroup.controls['publication_type'].setValue(this._adoptionFormGroup.value['publication_type'])
      this._adoptionCriaFormGroup.controls['species'].setValue(this._adoptionFormGroup.value['species'])
    } else {
      this._adoptionIndividualFormGroup.controls['publication_type'].setValue(this._adoptionFormGroup.value['publication_type'])
      this._adoptionIndividualFormGroup.controls['species'].setValue(this._adoptionFormGroup.value['species'])
    }
  }

  clearField(): void {
    this._adoptionIndividualFormGroup.controls['image'].setValue('')
    this._adoptionCriaFormGroup.controls['image'].setValue('')
  }

  closeForm(): void {
    this._router.navigate(['/adoptions'])
  }
}
