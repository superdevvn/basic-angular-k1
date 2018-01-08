import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { Customer } from '../shared/customer.model';


@Injectable()// dùng để chưa sẽ tài nguyên khác dùng chung ví dụ: Role,.
export class CustomerService {
    constructor(private apiService: ApiService) { }
    saveCustomer(customer: Customer) {
        return new Promise<Customer>((resolve, reject) => {
            this.apiService.post('api/saveCustomer', customer).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getList() {
        return new Promise<Customer[]>((resolve, reject) => {
            this.apiService.post('api/getCustomers', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getCustomer(id) {
        return new Promise<Customer>((resolve, reject) => {
            this.apiService.get(`api/getCustomer/${id}`).then((res: Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            this.apiService.post(`api/deleteCustomer/${id}`, {}).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }
}
