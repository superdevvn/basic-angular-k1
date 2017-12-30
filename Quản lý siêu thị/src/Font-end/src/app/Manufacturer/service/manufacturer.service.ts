import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Manufacturer } from '../shared/manufacturer.model';

@Injectable()
export class ManufacturerService {
    constructor(private apiService: ApiService) { }
    saveManufacturer(manufacturer: Manufacturer) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveManufacturer',manufacturer ).then((res:Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
   

    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getManufacturers',{}).then((res:Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getManufacturer(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getManufacturer/${id}`).then((res:Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
  
}