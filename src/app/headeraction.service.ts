import {EventEmitter, Injectable, Output} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class HeaderactionService {

  private headerActionIcon = new Subject<string>();
  private buttonPressed = new Subject<any>();

  headerActionIcon$ = this.headerActionIcon.asObservable();
  buttonPressed$ = this.buttonPressed.asObservable();

  setHeaderActionIcon(icon: string) {
    this.headerActionIcon.next(icon);
  }

  pressButton() {
    this.buttonPressed.next(true);
  }


  constructor() { }

}
