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
  private sub2: Subscription;
  private sub3: Subscription;

  constructor(private readonly subjectService: SubjectsService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
  }

  subscribe1() {
    this.sub1 = this.subjectService.observable$.subscribe((data) => this.subscription1Data.push(data));
  }

  subscribe2() {
    this.sub2 = this.subjectService.observable$.subscribe((data) => this.subscription2Data.push(data));
  }

  subscribe3() {
    this.sub3 = this.subjectService.observable$.subscribe((data) => this.subscription3Data.push(data));
  }
}
