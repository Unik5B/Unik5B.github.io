import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  passupdate(email,passwordnew){
    
    console.log(email.value, passwordnew.value)
  }

}
