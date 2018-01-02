import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
 import { InOut } from '../Shared/inout.model';
import { Response } from '@angular/http/src/static_response';


@Injectable()
export class InOutService {
    constructor(private apiService: ApiService) { }
    saveInOut(inout: InOut) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveInOut', inout).then((res: Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });

        });
    }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getInOuts', {}).then((res: Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getInOut(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getInOut/${id}`).then((res: Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

}
