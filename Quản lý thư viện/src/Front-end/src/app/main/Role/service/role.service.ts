import { Injectable } from '@angular/core';

import { ApiService } from './../../../api.service';
import { Role } from '../shared/role.model';
import { Response } from '@angular/http/src/static_response';

@Injectable()// dùng để chưa sẽ tài nguyên khác dùng chung ví dụ: Role,.
export class RoleService {
    constructor(private apiService: ApiService) { }
    saveRole(role: Role) {

        return new Promise<Role>((resolve, reject) => {
            this.apiService.post('api/saveRole', role).then((res:Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getRoles',{}).then((res:Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getRole(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getRole/${id}`).then((res:Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}
