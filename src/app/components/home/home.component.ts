import { Component, OnInit } from '@angular/core';
import { CelestialObjectService } from '../../services/celestial-object/celestial-object.service';
import { CelestialObject } from '../../models/celestial-object';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cObject = new CelestialObject();

  constructor(private cObjectService: CelestialObjectService) { }

  ngOnInit() { }

  getCelestialObject() {
    this.cObjectService.getCelestialObject()
      .subscribe(c => this.cObject = c);
  }
}
