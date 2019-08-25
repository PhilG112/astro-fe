import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let isAuthenticated = this.authService.isAuthenticated();
        console.log(isAuthenticated);
        if (isAuthenticated) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });
        }

        return next.handle(request);
    }
}
