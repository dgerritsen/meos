import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBarModule} from '@angular/material';

@Component({
  selector: 'app-vnav-item',
  templateUrl: './vnav-item.component.html',
  styleUrls: ['./vnav.component.css']
})
export class VnavItemComponent implements OnInit {
  @Input() disabled = false;
  @Input() type = '';
  constructor(public snackbar: MatSnackBarModule) { }

  ngOnInit() {
  }
}
