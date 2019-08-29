import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  ErrorInterceptor,
  JwtInterceptor
} from './interceptors';

import {
  AuthGuard
} from './shared'

import {
  CelestialService,
  JwtService,
  AuthenticationService
} from './services';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AuthGuard,
    CelestialService,
    JwtService,
    AuthenticationService
  ],
  declarations: []
})
export class CoreModule { }
