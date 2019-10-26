import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { FileUploadModel } from '../../../shared/models/file-upload.model';
import { environment } from '../../../../environments/environment';

@Injectable()
export class UploadService {
  constructor(private http: HttpClient) { }

  uploadFileToBlob(request:FileUploadModel): Observable<any> {
    let formData = new FormData();
    for (let i = 0; i < request.formFiles.length; i++) {
      formData.append('FormFiles', request.formFiles[i])
    }
    formData.append('Description', request.description);

    return this.http.post(`${environment.apiEndpoint}/upload/blob`, formData);
  }
}
