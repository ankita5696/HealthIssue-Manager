import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService
    ){}
              //private alertify: AlertyfyService) {}

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if(token) {
      localStorage.setItem('token', token.userName);
      //this.alertify.success('Login Successfully');
      this.router.navigate(['../HealthIssues']);
      //alert('Login Successfully');
    } else {
      //this.alertify.error('User id or passwird is wrong');
      alert('User id or passwird is wrong');
    }
  }
}
