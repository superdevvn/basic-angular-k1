import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { setTimeout } from 'timers';
declare var $:any;
@Injectable()// dùng để chưa sẽ tài nguyên khác dùng chung ví dụ: Role,.

export class NotificationService {
    constructor() {}
    success(message:string){
        $('body').append(`<div  class ="bg-success"id="notificationSuccess"
        style="
            position:fixed;
            top:20px;
            right:20px;
            width:100px;
            height:50px;
            background:green;
            "><strong>${message}</strong></div`);
            $('#notificationSuccess').slideToggle("slow");
             setTimeout(()=>{
                
                $('notificationSuccess').remove();
             },5000);
    }
}
