import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-blob-form',
  templateUrl: 'blob.component.html',
  styleUrls: []
})

export class BlobComponent {
  photoForm = this.fb.group({
    photo: []
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.photoForm.value["photo"]);
  }
}
