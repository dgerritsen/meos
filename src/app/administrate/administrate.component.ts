import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-administrate',
  templateUrl: './administrate.component.html',
  styleUrls: ['./administrate.component.css']
})
export class AdministrateComponent implements OnInit {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  showDisabledToast() {
    this.snackbar.open('Niet beschikbaar in oefenmodus', '', { duration: 2000 });
  }

}
