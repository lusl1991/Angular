import { Component } from '@angular/core';
import { User } from '../data/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  active : boolean = true;

  favoriteList = ['apple','orange','banana','pear'];

  user  = new User('张三','12306@163.com','Nothing is impossible',this.favoriteList[2]);

  get userInfo(){
    return JSON.stringify(this.user);
  }

  addUser(){
    this.active = false;
    this.user = new User('','','','');
    setTimeout(() => this.active = true, 0);
  }

  submit(){
    alert(this.userInfo);
  }

}
