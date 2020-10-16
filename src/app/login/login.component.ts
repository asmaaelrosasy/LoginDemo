import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_service/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private formBuilder: FormBuilder) {
    if (this.authenticationService.loggedIn) {
      this.router.navigate(['home']);
    }
  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f(): any { return this.loginForm.controls; }

  onSubmit(value): any {
    this.submitted = true;
    // stop here if form is invalid

    if (this.loginForm.invalid) {
      return;
    } else {
      this.login(value);
    }
  }

  login(formData): void {
    if (formData.email !== '' && formData.password !== '') {
      this.loading = true;
      if (this.authenticationService.login(formData.email, formData.password)) {
        this.router.navigate(['home']);
      } else {
        this.loading = false;
        this.error = 'Email or password is incorrect';
      }
    }
  }

}
