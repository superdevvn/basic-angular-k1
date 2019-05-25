<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
@Injectable()// dùng để chưa sẽ tài nguyên khác dùng chung ví dụ: Role,.
export class LoadingService {
    constructor(private apiService: ApiService) { }
    start() {
        $('body').append(`<any id ="globalLoading"
        style="top:0;
        left:0;
        height:100vh;
        width:100vw;
        position:fixed;
        opacity:0.6;
        background:#FFFFF;
        background-imgage:url(../../../assets/ace-master/images/market.png);
        z-index:99999;
        background-position:center;
        background-repeat:no-repeat;"></any>
         `);
    }
    stop(){
        $('globalLoading').remove();
    }
    
    }

=======
import { Injectable } from "@angular/core";
declare var $: any;
@Injectable()
export class LoadingService {
constructor(){}
start(){
    $('body').append(`<any id="globalLoading"
    style="top:0;
    left:0;
    height:100vh;
    width:100vh;
    position:fixed;
    opacity:0.6;
    background: #FFFFFF;
    z-index: 99999;
    background-position: center;
    background-repeat:no-repeat; "></any>`);
}
stop(){
    $(`#globalLoading`).remove();
}
}
>>>>>>> 31ecb4387c48ccf56bdeff4efb62e6919bbbda15
