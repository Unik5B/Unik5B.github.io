import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('initializing login...')
  }
  login(){
    console.log('login...');
    var email= (document.getElementById('input_email') as HTMLInputElement).value;
    console.log(email);

    interface ToastButton {
      text?: string;
      icon?: string;
      side?: 'start' | 'end';
      role?: 'cancel' | string;
      cssClass?: string | string[];
      handler?: () => boolean | void | Promise<boolean | void>;
    }
  }
  resetPassword(){
    console.log('reset password...')
  }

}

