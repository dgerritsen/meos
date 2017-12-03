import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  list = [
    {
      icon: 'persoon',
      title: 'Natuurlijk persoon',
      url: 'np'
    },
    {
      icon: 'rechtspersoon',
      title: 'Rechtspersoon',
      url: 'rp'
    }
  ];

  constructor(public snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  OpenSnackbar() {
    this.snackbar.open('Niet beschikbaar in oefenmodus', '', { duration: 2000 });
  }

}
