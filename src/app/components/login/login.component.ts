import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';
import { UserModel } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

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

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router) { }

  onSubmit() {
    let user = new UserModel();
    user.userName = this.loginForm.value['userName'];
    user.password = this.loginForm.value['password'];

    this.authService.login(user)
      .subscribe(_ => {
        if (this.authService.isAuthenticated()) {
          this.router.navigate(['admin'])
        }
      });
  }
}
