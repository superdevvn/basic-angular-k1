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
    input2:number;
    user:User;
    input1Label :string;
    input1Model :string;
    input2Label :string;
    input2Model ;string;
    constructor(){
        this.user = new User();
        this.user.username = "Admin";
        this.user.password = "123456";
        this.input1="This is input value";
        this.input1Label ="abc";
        this.input1Model =" this is input 1 model"
        this.input2Label ="abc";
        this.input2Model =" this is input 1 model"
    this.input2 = 100;
    }
    ngOnInit(){
        setTimeout(()=>{
            this.input1="Test Hello";
        },5000);
    }
    ngAfterViewInit(){

    }
    ngOnDestroy(){

    }

    onClick(){
        // alert(this.input1);
        alert(this.user.username);
        alert(this.user.password);
        // alert(""+this.input1Model)
    }
}