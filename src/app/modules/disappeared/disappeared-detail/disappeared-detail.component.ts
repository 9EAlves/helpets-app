import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { Disappeared} from './../../../core/models/disappeared.model';
import { DisappearedService} from './../../../core/services/disappeared.service'

@Component({
  selector: 'app-disappeared-detail',
  templateUrl: './disappeared-detail.component.html',
  styleUrls: ['./disappeared-detail.component.css']
})
export class DisappearedDetailComponent implements OnInit {

  private HttpRequest: Subscription
  Disappeared: Disappeared

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private disappearedService: DisappearedService
  ) { }

  ngOnInit(): void {
    const disappearedId = this.ActivatedRoute.snapshot.params['disappearedId']
    this.findDisappearedById(disappearedId)
  }

  ngOnDestroy():void{
    this.HttpRequest.unsubscribe()
  }

  findDisappearedById(disappearedId: String): void{
    this.HttpRequest = this.disappearedService.findDisappearedId(disappearedId).subscribe(response =>{
     this.Disappeared = response.body['data']
     // console.log(response.body['data'])
    }, err =>{
      console.log(err)
    })
  }

}
