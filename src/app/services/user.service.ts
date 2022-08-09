import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
    api = "http://localhost:1337/users"
  getUser(){
    return this.http.get(this.api)
  }

  getUserByid(){}

  createUser(name: string,last_name:string,email: string,password: string,phone: number,product_id:string){
    return this.http.post(this.api,{
      name, last_name, email, password, phone, product_id
    })
  }

  removeUserByid(){}

  deleteUser(){}

  updateUser(){
    return this.http.get(this.api)
    
  }
}
