import { Component } from '@angular/core';
declare var $:any;
class User{
    username:string;
    password:string;
}
@Component({
    selector: 'dashboard',
    templateUrl:'./dashboard.component.html'
})
export class DashboardComponent {
    input1:string;
    user:User;
    constructor(){
        this.user = new User();
        this.user.username = "Admin";
        this.user.password = "123456";
        this.input1="This is input value";
    }
    ngOnInit(){
        setTimeout(()=>{
            this.input1="Test Hello";
        },5000);
    }
    // ngAfterViewInit(){
    //     $.getScript("assets/ace-master/js/ace-elements.min.js",function(){
    //         console.log("ace-elements.min");
    //       $.getScript("assets/ace-master/js/ace.min.js",function(){
    //         console.log("ace.min");
    //         $.getScript("assets/ace-master/js/load.js",function(){
    //             console.log("ace-elements.min");
    //           });
    //       }); 
    //     });

    // }
    ngOnDestroy(){

    }
    onClick(){
        alert(this.input1);
        alert(this.user.username);
        alert(this.user.password);
    }
}