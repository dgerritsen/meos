import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
