import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'role-detail',
    templateUrl:'./role-detail.component.html'
})
export class RoleDetailComponent {
    name:string;
    description:string;

    constructor(private router: Router) {
    }
    
    save(){
        alert(`Name: ${this.name}, Description: ${this.description}`);
    }

    back(){
        this.router.navigate(['/main/role-list']);
    }
}