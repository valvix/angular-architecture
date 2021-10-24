import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  //Define Subject and Observable properties here
  public obervable$: Observable<string>;
  private subject$: Subject<string>;

  constructor() {
    this.init();
  }

  init() {
    // Create Subject and Observable Here 
    this.subject$ = new Subject();
    this.obervable$ = this.subject$.asObservable();

    // Create interval here
    setInterval(() => {
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      this.subject$.next(time);
    }, 3000)
  }

}
