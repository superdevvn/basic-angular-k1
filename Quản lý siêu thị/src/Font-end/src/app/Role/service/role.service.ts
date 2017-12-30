import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Role } from '../shared/role.model';

@Injectable()
export class RoleService {
    constructor(private apiService: ApiService) { }
    saveRole(role: Role) {
        return new Promise((resolve, reject) => {
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
    deleteRole(role: Role[]) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/deleteRole', role).then((res:Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}