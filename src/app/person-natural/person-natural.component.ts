import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeaderactionService} from '../headeraction.service';

@Component({
  selector: 'app-person-natural',
  templateUrl: './person-natural.component.html',
  styleUrls: ['./person-natural.component.css'],
})
export class PersonNaturalComponent implements OnInit, OnDestroy {

  constructor(private headeractionService: HeaderactionService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.headeractionService.setHeaderActionIcon('');
  }


}
