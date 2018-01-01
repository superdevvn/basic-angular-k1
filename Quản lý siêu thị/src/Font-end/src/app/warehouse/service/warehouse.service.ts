import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Warehouse } from '../shared/warehouse.model';

@Injectable()// dùng để chưa sẽ tài nguyên khác dùng chung ví dụ: Role,.
export class WarehouseService {
    constructor(private apiService: ApiService) { }
    saveWarehouse(warehouse: Warehouse) {
        return new Promise<Warehouse>((resolve, reject) => {
            this.apiService.post('api/saveWarehouse', warehouse).then((res:Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getList() {
        return new Promise<Warehouse[]>((resolve, reject) => {
            this.apiService.post('api/getWarehouses',{}).then((res:Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getWarehouse(id) {
        return new Promise<Warehouse>((resolve, reject) => {
            this.apiService.get(`api/getWarehouse/${id}`).then((res:Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}
