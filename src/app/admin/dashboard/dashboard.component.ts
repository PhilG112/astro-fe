import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName("nav")[0].style.display = "none";
  }

  ngOnDestroy() {
    document.getElementsByTagName("nav")[0].style.display = "block";
  }

}
