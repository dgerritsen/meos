import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeMenu(): void {
    const element = <HTMLElement>document.getElementsByClassName('menu_wrapper')[0];
    const bg = <HTMLElement>document.getElementsByClassName('menu_overlay')[0];
    element.style.width = '0px';
    bg.style.opacity = '0';
    bg.style.pointerEvents = 'none';
  }

}
