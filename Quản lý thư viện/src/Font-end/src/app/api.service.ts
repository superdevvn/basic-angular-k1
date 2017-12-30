import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { resolve } from 'path';
import { reject } from 'q';
import { Headers } from '@angular/http/src/headers';
@Injectable()
export class ApiService{
constructor(private http:Http){}
post(url:string, data:any){
    return new Promise((resolve,reject)=>{
let headers=new Headers({'Content-Type':'application/json;charset'})
this.http.post(this.)
    });
}

}