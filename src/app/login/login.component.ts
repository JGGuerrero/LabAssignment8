import { Component, OnInit } from '@angular/core';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';


export interface IUser {
  id?: number;
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  user: IUser = {username: '', password: ''};
  constructor() { }

  ngOnInit() {
  }

  login(user: IUser) {
    console.log ('from login user: ', user);
    const defaultUser:IUser = {username: 'Jguerrero', password: 'Guerrero123'}
    if(user.username != null && user.password != null){
      if(user.username === defaultUser.username && user.password === defaultUser.password) {
        // log the user in
        // store user in localStorage
        //navigate to contacts page 

      }
    }else {

    }

    }

  }




