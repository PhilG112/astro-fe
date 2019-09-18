import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UploadComponent } from './upload/upload.component';
import { InstagramComponent } from './upload/forms/instagram/instagram.component';
import { BlobComponent } from './upload/forms/blob/blob.component';
import { FlickrComponent } from './upload/forms/flickr/flickr.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    UploadComponent,
    InstagramComponent,
    BlobComponent,
    FlickrComponent
  ],
  exports: [
  ]
})
export class AdminModule { }
