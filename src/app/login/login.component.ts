import { Component, OnInit } from '@angular/core';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { LocalStorageService } from '../localStorageService';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

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


  user: IUser = { username: '', password: '' };
  localStorageService: LocalStorageService<IUser>
  currentUser: IUser = null;
  constructor(private router: Router, private toastService: ToastService) {
    this.localStorageService = new LocalStorageService('user');
  }

  ngOnInit() {
    this.currentUser = this.localStorageService.getItemsFromLocalStorage();
    console.log('this.currentUser--->', this.currentUser);
    if(this.currentUser != null){
      this.router.navigate(['contacts']);
    }
  }

  login(user: IUser) {
    console.log('from login user: ', user);
    const defaultUser: IUser = { username: 'josh', password: '123' }
    if (user.username != '' && user.password != '') {
      if (user.username === defaultUser.username && user.password === defaultUser.password) {
        // log the user in
        // store user in localStorage
        this.localStorageService.saveItemsToLocalStorage(user);
        //navigate to contacts page 
        this.router.navigate(['contacts', user]);
      } else {
        //show login error
        console.log('')
        this.toastService.showToast('warning', 'Login failed! Please check your username or password!', 2000);
      }
    } else {
      //show login error
      console.log('')
      this.toastService.showToast('danger', 'Login failed! Please specify username and password', 2000);

    }

  }

}




