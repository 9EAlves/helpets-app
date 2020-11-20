import { User } from './../../../core/models/user.model';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-ong-card',
  templateUrl: './ong-card.component.html',
  styleUrls: ['./ong-card.component.css']
})
export class OngCardComponent implements OnInit {

  @Input() User: User

  constructor() { }

  ngOnInit(): void {
  }

  sliceSnyposis(value: String): String {
    return `${value.slice (0, 100)}...`
  }

}
