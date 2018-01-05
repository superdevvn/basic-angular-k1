import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class ApiService {
    host:string = 'http://103.232.121.69:5101/';
    token: string="";
    constructor(private http: Http) { }
    post(url: string, data: any) {
        return new Promise<Response>((resolve, reject) => {
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            this.http.post(this.host + url, data, { headers: headers })
                .toPromise()
                .then(res => {
                    if(res.status == 200){
                        resolve(res);                        
                    } else {
                        reject("Có lỗi xảy ra");
                    }
                }).catch(err => {
                    reject(err);
                });
        });
    }

    get(url: string) {
        return new Promise((resolve, reject) => {
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            this.http.get(this.host + url, { headers: headers })
                .toPromise()
                .then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
        });
    }
}