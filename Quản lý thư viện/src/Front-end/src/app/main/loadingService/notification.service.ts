import { Injectable } from '@angular/core';
// import { setTimeout } from 'timers';
import * as jquery from 'jquery';
declare var $: any;
@Injectable()
export class NotificationService {
    constructor() { }

    success(message: string) {
        $('body').append(`<div id="notification" style="
       position:fixed;
       top:20px;
       right:20px;
       width:100px;
       height:50px;
       background-color:green;
       z-index:99999;
       color: red;
       ">${message}</div>`);
           setTimeout(() => {
            $('#notification').slideToggle('slow');
               $('#notification').remove();
           }, 2500);
    }
}
