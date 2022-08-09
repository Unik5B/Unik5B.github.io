import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 

  constructor(private Product: ProductService,private http: HttpClient) { }

  ngOnInit() {
    
  }
  login(input_email,input_password){
    

    
  }
  

}

