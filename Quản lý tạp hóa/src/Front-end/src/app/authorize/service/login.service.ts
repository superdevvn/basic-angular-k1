import { Injectable } from "@angular/core";
import { ApiService } from "./../../api.service";
import { User } from "./../../main/user/shared/user.model";

@Injectable()

export class LoginService {

    user: User;
    constructor(private apiService: ApiService) { }
    login(username, password) {
        return new Promise<User>((resolve, reject) => {
            this.apiService.post('api/login', {
                username: username,
                password: password
            }).then(() => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }

    getAuthorize(){
        return new Promise<User>((resolve, reject) => {
            this.apiService.get('api/authorize').then(res => {
                this.user = res.json();
                resolve(this.user);
            }).catch(err => {
                reject(err);
            });
        });
    }
}