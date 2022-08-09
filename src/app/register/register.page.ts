import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';


const routeRedirect = document.createElement('routerLink');
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})



export class RegisterPage implements OnInit {

  

  constructor(
    private userServices: UserService,
    private alertControll : AlertController,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.userServices.getUser().subscribe(res => console.log(res), err => console.log(err))
  }

  saveReister(name,last_name,email,password,phone,product_id){
    this.userServices.createUser(name.value,last_name.value,email.value,password.value,phone.value,product_id.value).subscribe(
      (res) => this.register(res),
      (err) => this.presentAlert()
    );
  }
  
   async register (res){
    console.log(res);
    this.navCtrl.navigateForward('login');
    
   }
  
    async presentAlert() {
      const alert = await this.alertControll.create({
        header: 'Alert',
        subHeader: 'Important message',
        message: 'wrong data',
        buttons: ['OK'],
      });
  
      await alert.present();
    }

}
