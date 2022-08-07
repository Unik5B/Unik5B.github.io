import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private userServices: UserService
  ) { }

  ngOnInit() {
    this.userServices.getUser().subscribe(res => console.log(res), err => console.log(err))
  }

  saveReister(name,last_name,email,password,phone,product_id){
    console.log(name.value,last_name.value,email.value,password.value,phone.value,product_id.value)

  }

}
