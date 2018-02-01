import { Router, ActivatedRoute } from '@angular/router';
import { Indemnify } from '../shared/indemnify.model';
import { ApiService } from './../../../api.service';
import { Injectable } from '@angular/core';
import { NotificationService } from '../../loadingService/notification.service';


@Injectable()
export class IndemnifyService {
    constructor(private apiService: ApiService, private notification: NotificationService) { }
    ngOnInit() { }
    ngAfterInit() { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getIndemnifies', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    // getList() {
    //     return new Promise((resolve, reject) => {
    //         this.apiService.post('api/getInOuts', {}).then(res => {
    //             resolve(res.json());
    //         }).catch(err => {
    //             reject(err);
    //         });
    //     });
    // }

    getIndemnidy(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getIndemnify/${id}`).then((res: Response) => {
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
    saveIndemnify(indemnify: Indemnify) {
        return new Promise<Indemnify>((resolve, reject) => {
            this.apiService.post('api/saveIndemnify', indemnify).then(res => {
                resolve(res.json());
                this.notification.success("Saved");
            }).catch(err => {
                alert(err);
                this.notification.fail("Save failed");
            });
        });
    }
}