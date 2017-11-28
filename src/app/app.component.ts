import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {TitleService} from './title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TitleService],
})
export class AppComponent implements OnInit {
  title = '';
  menu = false;
  currentUrl = '/';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: TitleService) {
  }

  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      // .mergeMap((route) => route.routeConfig)
      .subscribe((event) => { this.titleService.setTitle(event.routeConfig.data['title']); this.currentUrl = event.routeConfig.path; });

    this.titleService.getTitle().subscribe((title) => this.title = String('test'));
  }


  openMenu(): void {
    this.menu = true;
    const element = <HTMLElement>document.getElementsByClassName('menu_wrapper')[0];
    const bg = <HTMLElement>document.getElementsByClassName('menu_overlay')[0];
    element.style.width = '87%';
    bg.style.display = 'block';
    bg.style.opacity = '100';
    bg.style.zIndex = '1';
    bg.style.pointerEvents = 'auto';
  }
}
