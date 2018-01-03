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
<<<<<<< HEAD
login(){
    this.LoginService.login(this.username,this.password).then(()=>{
        this.router.navigate(["main/dashboard"]);
=======
login(){    console.log(this.username,this.password);
    this.LoginService.login(this.username,this.password).then(()=>{
        this.router.navigate(["main/dashboard"]);

>>>>>>> cd8a2dce1afd751c3220f7a0110d9cab7d13476c
    }).catch(err=>{
        alert(err);
    });
}
<<<<<<< HEAD
}
=======
}
>>>>>>> cd8a2dce1afd751c3220f7a0110d9cab7d13476c
