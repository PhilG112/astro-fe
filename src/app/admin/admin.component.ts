import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  private element = <HTMLElement>document.getElementsByClassName('navbar')[0];

  constructor(private location: Location) {
  }

  ngOnInit(): void {
    this.element.style.display = 'none';
  }

  ngOnDestroy(): void {
    this.element.style.display = 'block';
  }

  goBack(): void {
    this.location.back();
  }
}

