import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-disappeared-detail',
  templateUrl: './disappeared-detail.component.html',
  styleUrls: ['./disappeared-detail.component.css']
})
export class DisappearedDetailComponent implements OnInit {

  constructor(
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const disappearedName = this.ActivatedRoute.snapshot.params['disappearedName']
    console.log(disappearedName)
  }

}
