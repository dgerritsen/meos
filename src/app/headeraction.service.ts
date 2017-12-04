import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class HeaderactionService {

  private headerActionIcon = new Subject<string>();

  headerActionIcon$ = this.headerActionIcon.asObservable();

  setHeaderActionIcon(icon: string) {
    this.headerActionIcon.next(icon);
  }

  getHeaderActionIcon() {
    return this.headerActionIcon;
  }

  constructor() { }

}
