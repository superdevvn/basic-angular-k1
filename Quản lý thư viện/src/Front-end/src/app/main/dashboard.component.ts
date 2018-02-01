import { Component } from '@angular/core';
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
    ngAfterViewInit(){
        $.getScript('assets/porto/javascripts/theme.js', function(){
            $.getScript('assets/porto/javascripts/theme.custom.js', function(){
              $.getScript('assets/porto/javascripts/theme.init.js', function(){
                  $.getScript('assets/porto/javascripts/dashboard/examples.dashboard.js', function(){
                  });
                });
            });
          });
    }
    ngOnDestroy(){

    }

    onClick(){
        alert(this.input1);
        alert(this.user.username);
        alert(this.user.password);
    }
}