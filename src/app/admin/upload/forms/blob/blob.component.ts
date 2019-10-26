import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { FileUploadModel } from '../../../../shared/models/file-upload.model'
import { UploadService } from 'src/app/core/services';

@Component({
  selector: 'app-blob-form',
  templateUrl: 'blob.component.html',
  styleUrls: []
})

export class BlobComponent {
  photoForm = this.fb.group({
    photos: [],
    description: []
  });

  public files: any[];

  constructor(private fb: FormBuilder, private uploadService: UploadService) { }

  onFileChanged(event: any) {
    console.log("DING");
    this.files = event.target.files;
  }

  onSubmit() {
    let m = new FileUploadModel();
    m.formFiles = this.files;
    m.description = this.photoForm.value["description"];

    this.uploadService.uploadFileToBlob(m).subscribe();
  }
}
