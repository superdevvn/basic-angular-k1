import { Component } from '@angular/core';
declare var $: any;
class User {
    username: string;
    password: string;
}
@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    input1: string;
    user: User;
    constructor() {
        this.user = new User();
        this.user.username = "Admin";
        this.user.password = "123456";
        this.input1 = "This is input value";
    }
    ngOnInit() {
        setTimeout(() => {
            this.input1 = "Test Hello";
        }, 5000);
    }
<<<<<<< HEAD
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
=======
    ngAfterViewInit() {
                $.getScript("assets/ace-master/js/ace-elements.min.js", function () {
                    console.log("ace-elements.min");                                     
                $.getScript("assets/ace-master/js/ace.min.js", function () {
                    console.log("ace.min");
                            $.getScript("assets/ace-master/js/load.js", function () {
                         console.log("load");  
                //     $.getScript("assets/ace-master/js/jquery-2.1.4.min.js", function () {
                //         console.log("jquery-2.1.4");
                //         $.getScript("assets/ace-master/js/bootstrap.min.js", function () {
                //             console.log("bootstrap.min");

                //         });
                //     });
                });
            });
        });

    }
    ngOnDestroy() {

    }
    onClick() {
>>>>>>> 31ecb4387c48ccf56bdeff4efb62e6919bbbda15
        alert(this.input1);
        alert(this.user.username);
        alert(this.user.password);
    }
}