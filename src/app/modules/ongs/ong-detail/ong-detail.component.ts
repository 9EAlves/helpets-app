import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ong-detail',
  templateUrl: './ong-detail.component.html',
  styleUrls: ['./ong-detail.component.css']
})
export class OngDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const ongId = this.activatedRoute.snapshot.params['userId']

  }

}
