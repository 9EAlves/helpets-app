import { Component, OnInit, Input } from '@angular/core';
import { Adoption } from './../../../core/models/adoption.model'

@Component({
  selector: 'app-adoption-card',
  templateUrl: './adoption-card.component.html',
  styleUrls: ['./adoption-card.component.css']
})
export class AdoptionCardComponent implements OnInit {

  @Input() Adoption: Adoption

  constructor() { }

  ngOnInit(): void {
  }

  sliceDescription(value: String): String {
    return `${value.slice(0, 150)}...`
  }

}
