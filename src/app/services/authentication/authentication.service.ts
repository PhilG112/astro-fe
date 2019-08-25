import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { LoginResponseModel } from 'src/app/models/loginresponse.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(user: UserModel) : Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${environment.apiEndpoint}/login`, user)
      .pipe(
        map(response => {
          console.log(response);
          localStorage.setItem("jwt", response.token);
          return response;
        })
      );
  }

  isAuthenticated() : boolean {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      return true;
    }

    return false;
  }
}
