import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectsService } from './core/subjects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription1Data = [];
  subscription2Data = [];
  subscription3Data = [];

  private sub1: Subscription;

  constructor(private readonly subjectService: SubjectsService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  subscribe1() {
    this.sub1 = this.subjectService.observable$.subscribe((data) => this.subscription1Data.push(data));
  }

  subscribe2() {

  }

  subscribe3() {

  }


}
