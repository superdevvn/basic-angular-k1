import { Injectable } from '@angular/core';
// import { setTimeout } from 'timers';
import * as jquery from 'jquery';
declare var $: any;
@Injectable()
export class NotificationService {
    constructor() { }

    success(message: string){
        $('body').append(`<div class="alert alert-success" id="notificationSuccess" style="
        position:fixed;
        top: 20px;
        right: 20px;
        z-index: 99999;
        display:none;
        "><strong>Report:</strong> ${message}</div>`);
        $('#notificationSuccess').slideToggle('slow');
        setTimeout(() => {
            $('#notificationSuccess').fadeOut(2500);
            // $('#notificationSuccess').remove();
        }, 500);
    }
}
