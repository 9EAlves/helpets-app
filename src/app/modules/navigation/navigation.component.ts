import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Event as RouterEvent } from "@angular/router"

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  title: string = 'Helpets'


  ngOnInit(): void {
  }
  
  
  router: string;
  
  //title: any;

  constructor(public _router: Router) {
    let asyncLoadCount = 0


_router.events.subscribe((event: RouterEvent): void => {

      if (event instanceof RouteConfigLoadStart) {
        asyncLoadCount++
      } else if (event instanceof RouteConfigLoadEnd) {
        asyncLoadCount--
      }

  
    })
  }

}
