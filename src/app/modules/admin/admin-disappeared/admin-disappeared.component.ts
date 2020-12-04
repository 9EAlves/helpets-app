import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Disappeared} from './../../../core/models/disappeared.model';
import { DisappearedService } from './../../../core/services/disappeared.service';


@Component({
  selector: 'app-admin-disappeared',
  templateUrl: './admin-disappeared.component.html',
  styleUrls: ['./admin-disappeared.component.css']
})
export class AdminDisappearedComponent implements OnInit , OnDestroy {



  private HttpRequest: Subscription
  Disappeared: Disappeared[]

  constructor(
    private disappearedService: DisappearedService,
    private activatedRoute: ActivatedRoute,
    private route: Router
    ) {  }

  ngOnInit(): void {
    console.log(this.Disappeared)
    this.findAllDisappeared()
  }


  findAllDisappeared(): void {
    this.HttpRequest = this.disappearedService.findAllDisappeared().subscribe(response => {
      this.Disappeared = response.body['data']
       console.log(response)
    }, err => {
      console.log(err)
    })
  }

  ngOnDestroy(): void {
    this.HttpRequest.unsubscribe()
  }

  
  updateDisappeared(disappearedId: String){
    this.HttpRequest = this.disappearedService.updateDisappearedById(disappearedId, null).subscribe(response => {
    this.findAllDisappeared()
    }, err =>{
      console.log(err)
    })
  }
  deleteDisappeared(disappearedId: String){
      this.HttpRequest = this.disappearedService.deleteDisappearedById(disappearedId).subscribe(response => {
    this.findAllDisappeared()
      }, err =>{
        console.log(err)
      })
    
  }
}
