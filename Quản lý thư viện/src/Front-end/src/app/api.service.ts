import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Token } from '@angular/compiler';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ApiService {
    token: string = "none";
    host: string = 'http://103.232.121.69:5102/';
    constructor(private http: Http, private cookieService: CookieService) {
      if (this.cookieService.check('Auth-Library'))this.token = this.cookieService.get('Auth-Library');
     }
    post(url: string, data: any) {
        return new Promise<Response>((resolve, reject) => {
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            headers.append('Auth-Library', this.token);
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