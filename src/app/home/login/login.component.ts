import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { LoginRequest } from '../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <h3>Login</h3>

    <form #myForm="ngForm" (ngSubmit)="login()">
      <label for="email">Email</label>
      <input [(ngModel)]="loginRequest.email" required id="email" 
            #myEmail="ngModel"
            name="email" type="text" class="form-control">
      

      <div class="alert alert-danger" *ngIf="myEmail.invalid && (myEmail.dirty || myEmail.touched)">
        @if(myEmail.errors && myEmail.errors['required']) {
          <div> Il nome è obbligatorio </div>   
        }              
      </div> 
            
      
      <label for="password">Password</label>
      <input [(ngModel)]="loginRequest.password" required id="password" 
            #myPassword="ngModel" 
            name="password" type="password" class="form-control">
      <div class="alert alert-danger" *ngIf="myPassword.invalid && (myPassword.dirty || myPassword.touched)">
        @if(myPassword.errors && myPassword.errors['required'] ) {
          <div> La password è obbligatoria </div>   
        }              
      </div> 

      <button type="submit" [disabled]="!myForm.valid" class="btn btn-success mt-3 mb-3" >
        Send
      </button>
    </form>
  `,
  styles: ``
})

export class LoginComponent {
  constructor(private loginService: LoginService,
              private router: Router
  ) {}

  public loginRequest = { email: "eve.holt@reqres.in", password:"cityslicka" }

  login()
  {
    this.loginService.login(this.loginRequest)
      .subscribe(x => {
        this.router.navigate(['/products']);
       });
  }
}
