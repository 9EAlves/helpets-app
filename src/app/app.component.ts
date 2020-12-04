import { Component } from '@angular/core';
import { Router, NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Event as RouterEvent } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  router: string;
  
  title: any;

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
