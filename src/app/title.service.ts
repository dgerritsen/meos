import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TitleService {
  title = new Subject();

  constructor() { }

  getTitle(): Subject<string> { return this.title; }
  setTitle(newTitle: string) { this.title.next(newTitle); }
}
