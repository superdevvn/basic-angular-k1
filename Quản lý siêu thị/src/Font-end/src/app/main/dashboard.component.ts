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
  
    constructor(){
      
    }
    ngOnInit(){
      
    }
    ngAfterViewInit(){
<<<<<<< HEAD
              $.getScript("assets/ace-master/js/load.js",function(){      
           });
=======
        $.getScript("assets/ace-master/js/ace-elements.min.js",function(){
            console.log("ace-elements.min");
          $.getScript("assets/ace-master/js/ace.min.js",function(){
            console.log("ace.min");
            $.getScript("assets/ace-master/js/load.js",function(){
                console.log("ace-elements.min");
              });
          }); 
        });

>>>>>>> cd8a2dce1afd751c3220f7a0110d9cab7d13476c
    }
    ngOnDestroy(){

    }

    onClick(){
   
    }
}