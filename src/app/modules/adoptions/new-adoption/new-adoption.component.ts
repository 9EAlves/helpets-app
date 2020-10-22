import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Subscription } from 'rxjs';
import { Adoption } from './../../../core/models/adoption.model'
import { AdoptionsService } from './../../../core/services/adoptions.service'

@Component({
  selector: 'app-new-adoption',
  templateUrl: './new-adoption.component.html',
  styleUrls: ['./new-adoption.component.css']
})
export class NewAdoptionComponent implements OnInit, OnDestroy {

  private httpRequest: Subscription

  adoptionFormGroup: FormGroup
  isNewCria: boolean = true

  @ViewChild('autosize') autosize: CdkTextareaAutosize

  constructor(

    private builder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeAdoptionFormGroup()
  }

  ngOnDestroy(): void {
    this.httpRequest.unsubscribe()
  }

  findAllSpecies(): void {

  }

  initializeAdoptionFormGroup(): void {
    this.adoptionFormGroup = this.builder.group({
      name: this.builder.control(null, [Validators.required]),
      bairro: this.builder.control(null, [Validators.required]),
      rua: this.builder.control(null, [Validators.required]),
      rede: this.builder.control(null, [Validators.required])
    })
  }

  closeForm(): void {

  }

}
