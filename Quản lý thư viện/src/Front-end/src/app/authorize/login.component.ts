import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';
@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private router: Router, private loginService: LoginService) { }
    username: string;
    password: string;
    login() {
        console.log(this.username, this.password);
        this.loginService.login(this.username, this.password).then(() => {
            this.router.navigate(['main/dashboard']);
        }).catch(err => {
            alert(err);
        });

    }
}
