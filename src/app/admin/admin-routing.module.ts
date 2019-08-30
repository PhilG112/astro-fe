import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthGuard } from '../core/shared';
import { AdminComponent } from './admin.component';
import { UploadComponent } from './upload/upload.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'upload',
        component: UploadComponent,
        canActivateChild: [AuthGuard]
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
