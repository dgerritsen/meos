import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vnav-item',
  templateUrl: './vnav-item.component.html',
  styleUrls: ['./vnav.component.css']
})
export class VnavItemComponent implements OnInit {
  @Input() disabled = false;
  @Input() type = '';
  constructor() { }

  ngOnInit() {
    console.log(this.type);
  }

}
