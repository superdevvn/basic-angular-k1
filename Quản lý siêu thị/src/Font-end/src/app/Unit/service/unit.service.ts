import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Unit } from '../shared/unit.model';

@Injectable()// dùng để chưa sẽ tài nguyên khác dùng chung ví dụ: Role,.
export class UnitService {
    constructor(private apiService: ApiService) { }
    saveUnit(unit: Unit) {
        return new Promise<Unit>((resolve, reject) => {
            this.apiService.post('api/saveUnit', unit).then((res:Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getList() {
        return new Promise<Unit[]>((resolve, reject) => {
            this.apiService.post('api/getUnits',{}).then((res:Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getUnit(id) {
        return new Promise<Unit>((resolve, reject) => {
            this.apiService.get(`api/getUnit/${id}`).then((res:Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}
