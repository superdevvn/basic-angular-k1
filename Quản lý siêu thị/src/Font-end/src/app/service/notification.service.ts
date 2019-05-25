import { Injectable } from "@angular/core";
declare var $: any;
@Injectable()
export class NotificationService {
constructor(){}
 success(message:string){
     $('body').append(`<div class="bg-success" id="notificationSuccess" style="
     position:fixed;
     top:45px;
     right:20px;
     z-index:99999;
     display:none;
     "><strong>Success!</strong>${message}</div>`);
     $('#notificationSuccess').slideToggle("slow");
     setTimeout(() =>{
         $('#notificationSuccess').remove();
     },5000);
 }
}