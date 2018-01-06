import { Injectable } from '@angular/core';
import * as jquery from 'jquery';
declare var $:any;
@Injectable()// dùng để chưa sẽ tài nguyên
export class NotificationService {
    
    constructor() { }
    success(message:string){
        $('body').append(`<div class="alert alert-success" id="notificationSuccess" style="
        position:fixed;
        top:20px;
        right:20px;
        z-index:99999;
        display:none;
        "><strong>Success!</strong> ${message}</div>`);
        $('#notificationSuccess').slideToggle("slow");
        setTimeout(() => {
            $('#notificationSuccess').remove();
        },5000);
    }
}
