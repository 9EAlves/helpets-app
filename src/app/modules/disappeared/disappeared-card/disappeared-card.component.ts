import { Component, OnInit, Input} from '@angular/core';
import { Disappeared} from './../../../core/models/disappeared.model';

@Component({
  selector: 'app-disappeared-card',
  templateUrl: './disappeared-card.component.html',
  styleUrls: ['./disappeared-card.component.css']
})
export class DisappearedCardComponent implements OnInit {

  @Input() Disappeared: Disappeared
  
  constructor() { }

  ngOnInit(): void {
  }

  sliceDescription(value: String): String{
    return `${value.slice(0,150)}...`
  }
}
