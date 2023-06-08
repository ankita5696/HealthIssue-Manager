import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user: any){
    let userArray = [];

    if(localStorage.getItem('Users')) {
      let user1 : any = localStorage.getItem('Users');
      userArray = JSON.parse(user1);
    }
    return userArray.find((p: { userName: any; password: any; }) => p.userName === user.userName && p.password === user.password);
  }
}
