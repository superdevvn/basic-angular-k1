import { Component } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import {Role} from './shared/role.model';

import { Http } from '@angular/http/';
@Component({
    selector: 'role-detail',
    templateUrl:'./role-detail.component.html'
})
export class RoleDetailComponent {
    name:string;
    description:string;
    role = new  Role;
    routerSubscription:any;
    id:number;
    constructor(private route:ActivatedRoute  , private router: Router,private http: Http) {
    }
    ngOnInit(){
        this.routerSubscription = this.route.params.subscribe(params => {
            this.id = +params['id'];
            let name = params['name'];
            console.log(this.id);
            console.log(name);
        });
    }
    save(){
        alert(`Name: ${this.name}, Description: ${this.description}`);
    }

    back(){
        this.router.navigate(['/main/role-list']);
    }
}