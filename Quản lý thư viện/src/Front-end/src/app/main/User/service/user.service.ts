import { Injectable } from '@angular/core';

import { ApiService } from './../../../api.service';
import { User } from '../shared/user.model';

@Injectable()// dùng để chưa sẽ tài nguyên khác dùng chung ví dụ: Role,.
export class UserService {
    constructor(private apiService: ApiService) { }
    saveUser(user: User) {
        return new Promise<User>((resolve, reject) => {
            this.apiService.post('api/saveUser', user).then((res) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getList() {
        return new Promise<User[]>((resolve, reject) => {
            this.apiService.post('api/getUsers',{}).then((res) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getUser(id) {
        return new Promise<User>((resolve, reject) => {
            this.apiService.get(`api/getUser/${id}`).then((res:Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}
