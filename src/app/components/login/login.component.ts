import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    userName: [],
    password: []
  });

  constructor(private authService: AuthenticationService, private fb: FormBuilder) { }

  onSubmit() {
    let user = new UserModel();
    user.userName = this.loginForm.value['userName'];
    user.password = this.loginForm.value['password'];

    this.authService.login(user)
      .subscribe();
  }

  logOut() {
    localStorage.removeItem("jwt");
  }

}
