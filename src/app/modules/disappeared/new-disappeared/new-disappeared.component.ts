import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Subscription } from 'rxjs';
import { Disappeared } from './../../../core/models/disappeared.model';
import { DisappearedService } from './../../../core/services/disappeared.service';
import { Specie } from './../../../core/models/species.model';
import { SpeciesService } from './../../../core/services/species.service';

@Component({
  selector: 'app-new-disappeared',
  templateUrl: './new-disappeared.component.html',
  styleUrls: ['./new-disappeared.component.css']
})
export class NewDisappearedComponent implements OnInit, OnDestroy {

  private httpRequest: Subscription

 
  _disappearedFormGroup: FormGroup

  _species: Specie[]

  @ViewChild('autosize') autosize: CdkTextareaAutosize

  constructor(
    private _speciesService: SpeciesService,
    private _disappearedsService: DisappearedService,
    private _builder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
     this.findAllSpecies()
    this.initializeDisappearedFormGroup()

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

  initializeDisappearedFormGroup(): void {
    this._disappearedFormGroup = this._builder.group({
      user: this._builder.control("5f7f8edf64e491068053a9f7"),
      image: this._builder.control('.'),
      publication_type: this._builder.control(null),
      pet_name: this._builder.control(null),
      species: this._builder.control(null),
      gender: this._builder.control(null),
      event_date: this._builder.control(null),
      description: this._builder.control(null),
      rated: this._builder.control(false)
      
    })
  }
  teste():void{
    console.log('Hello My Friend!')
  }



  createNewDisappeared(form: FormGroup): void {
    this.httpRequest = this._disappearedsService.createDisappeared(form.value).subscribe(response => {
      console.log(`Sua publicação foi cadastrada com sucesso`)
      this.closeForm()
    }, err => {
      console.log(form.value)
      this.closeForm()
    })
  }


  clearField(): void {

  }

  closeForm(): void {
    this._router.navigate(['/disappeared'])
  }

//   get publication_type() { return this._disappearedFormGroup.get('publication_type') } /*ok*/
//   get pet_name() { return this._disappearedFormGroup.get('pet_name') } /*ok*/
//  // get species() { return this._disappearedFormGroup.get('species') } /*ok*/
//   get gender() { return this._disappearedFormGroup.get('gender') } /*ok*/
//   get description() { return this._disappearedFormGroup.get('description') }

}