import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { CelestialModel } from '../../../shared/models/celestial.model';
import { environment } from '../../../../environments/environment';

@Injectable()
export class CelestialService {
  constructor(private http: HttpClient) { }

  getCelestialObjectById(id:number): Observable<CelestialModel> {
    return this.http.get<CelestialModel>(`${environment.apiEndpoint}/celestial/${id}`);
  }
}
