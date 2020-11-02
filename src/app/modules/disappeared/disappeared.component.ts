import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs'
import { Disappeared} from './../../core/models/disappeared.model'
import { DisappearedService} from './../../core/services/disappeared.service'


@Component({
  selector: 'app-disappeared',
  templateUrl: './disappeared.component.html',
  styleUrls: ['./disappeared.component.css']
})
export class DisappearedComponent implements OnInit, OnDestroy{

  private HttpRequest: Subscription
  Disappeared: Disappeared[]

  constructor( private disappearedService: DisappearedService) { }

  ngOnInit(): void {
    this.findAllDisappeared()
  }

  ngOnDestroy(): void {
    this.HttpRequest.unsubscribe()
  }

  findAllDisappeared(): void{
    this.HttpRequest = this.disappearedService.findAllDisappeared().subscribe(response => {
      /** Sucesso da requisição */
      this.Disappeared = response.body['disappeared']
      console.log(response)
    }, err =>{
      /** Erro da requisição */
      console.log(err)
    })
  }

}
