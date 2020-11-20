import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from './../../../core/models/user.model';
import { UserService } from './../../../core/services/user.service';


@Component({
  selector: 'app-ong-detail',
  templateUrl: './ong-detail.component.html',
  styleUrls: ['./ong-detail.component.css']
})
export class OngDetailComponent implements OnInit, OnDestroy {

  private httpRequest: Subscription
  User: User

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const ongId = this.activatedRoute.snapshot.params['userId']
    this.findOngById(ongId)
  }
  ngOnDestroy(): void {
    this.httpRequest.unsubscribe()
  }

  findOngById(userId: String): void {
    this.httpRequest = this.userService.findOngById(userId).subscribe(response =>{
        this.User = response.body['data']
        console.log(response)
    },err => {
        console.log(err)
    })
  }

}
