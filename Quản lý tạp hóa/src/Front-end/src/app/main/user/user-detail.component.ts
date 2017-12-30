import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
@Component({
    selector: 'user-detail',
    templateUrl:'./user-detail.component.html'
})
export class UserDetailComponent {

    constructor(private route: ActivatedRoute, private router: Router, private http: Http){

    }
    back (){
        this.router.navigate(['/main/user-list']);
    }

    save (){

    }
}