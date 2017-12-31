import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { resolve } from 'url';

@Injectable()
export class ApiService {
    host: string = 'http://103.232.121.69:5103/';
    constructor(private http: Http) {

    }
    post(url: string, data: any) { //create post methods
        return new Promise((resolve, reject) => {
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            this.http.post(this.host + url, data, { headers: headers })
                .toPromise()
                .then(res => { //if this methods execute successfully then returning "relsove"
                    resolve(res); //res means respone. resolve returns DATA
                }).catch(err => {//if not return the err(error).
                    reject(err);
                });
        });
    }

    get(url: string) { //Get methods
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