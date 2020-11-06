import { UserService } from './../../../core/services/user.service';
import { User } from './../../../core/models/user.model';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-ong',
  templateUrl: './ong.component.html',
  styleUrls: ['./ong.component.css']
})
export class OngComponent implements OnInit, OnDestroy {

  private httpRequest: Subscription
  User: User[]

  constructor(
    private UserService: UserService
  ) { }

  ngOnInit(): void {
    this.findAllUser()
  }

  ngOnDestroy(): void {
    this.httpRequest.unsubscribe()
  }

  findAllUser(): void {
    this.httpRequest =  this.UserService.findAllUser().subscribe(response => {
      this.User = response.body['data']
    }, err => {
      console.log(err)
    })
  }

}
