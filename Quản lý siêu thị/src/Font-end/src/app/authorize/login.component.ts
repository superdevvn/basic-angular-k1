import { Router} from '@angular/router';
import { Component, Injectable } from '@angular/core';
import { User } from '../user/shared/user.model';
import { LoginService } from './service/login.service';
@Component({
    selector: 'login',
    templateUrl:'./login.component.html'
})
export class LoginComponent {
username : string;
password:string;
constructor(private router:Router,private LoginService:LoginService){

}
login(){    console.log(this.username,this.password);
    this.LoginService.login(this.username,this.password).then(()=>{
        this.router.navigate(["main/dashboard"]);

    }).catch(err=>{
        alert(err);
    });
}
}
