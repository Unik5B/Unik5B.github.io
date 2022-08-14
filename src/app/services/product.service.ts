import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }
    api = "http://localhost:1337/dataobjects"
    api10 = "http://localhost:1337/dataobjects?_limit=10&_sort=time:DESC"
    apilast= "http://localhost:1337/dataobjects?_limit=1&_sort=time:DESC"
  getProduct(){
    return this.http.get(this.api)
  }
  getProductLast(){
    return this.http.get(this.apilast)
  }
  getPreoductLista(){
    return this.http.get(this.api10)
  }
  getProductChart(){
    
  }

}
