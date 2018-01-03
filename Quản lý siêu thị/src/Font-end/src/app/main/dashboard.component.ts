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
              $.getScript("assets/ace-master/js/load.js",function(){      
           });
    }
    ngOnDestroy(){

    }

    onClick(){
   
    }
}