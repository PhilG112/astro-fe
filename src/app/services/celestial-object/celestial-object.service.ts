import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CelestialObject } from '../../models/celestial-object';

@Injectable({
  providedIn: 'root'
})
export class CelestialObjectService {
  private baseUrl = 'https://localhost:44380'

  constructor(private http: HttpClient) { }

  getCelestialObject(): Observable<CelestialObject> {
    return this.http.get<CelestialObject>(`${this.baseUrl}/celestial/get`);
  }
}
