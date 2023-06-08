import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  addUSer(user: User){
    let userArray = [];

    if(localStorage.getItem('Users')) {
      let user1 : any = localStorage.getItem('Users');
      userArray = JSON.parse(user1);
      userArray = [user, ...userArray]
    } else {
      userArray = [user];
    }
    localStorage.setItem('Users',JSON.stringify(userArray));

  }
}
