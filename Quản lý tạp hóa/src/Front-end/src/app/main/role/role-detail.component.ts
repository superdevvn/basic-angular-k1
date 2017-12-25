import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Role } from '../shared/role.model';

@Component({
    selector: 'role-detail',
    templateUrl: './role-detail.component.html'
})
export class RoleDetailComponent {
    role = new Role();
    routerSubcription: any;
    id: number;
    constructor(private route: ActivatedRoute, private router: Router, private http: Http) {
    }

    ngOnInit() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; 
            // +params convert string to number
            let name = params['name'];
            console.log(this.id);
            console.log(name);
        });
    }
    save() {

    }

    back() {
        this.router.navigate(['/main/role-list']);
    }
}