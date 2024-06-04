import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: any;
  registerForm: any;
  activeForm: 'register' | 'login' = 'login';
  loginFailed: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  login() {
    console.log('login', this.loginForm.value);
    if(this.loginForm.valid){
      this.router.navigate(['/my-first-app/dashboard']);
    } else {
      this.loginFailed = true;
    }
  }
  register() {
    console.log('register', this.registerForm.value);
    if (this.registerForm.valid) {
      this.router.navigate(['/my-first-app/dashboard']);
    } else {
      this.loginFailed = true;
    }
  }
  toggleForm(form: 'register' | 'login') {
    this.activeForm = form;
  }
}