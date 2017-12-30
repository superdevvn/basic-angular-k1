import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './shared/role.model';
import { RoleService } from './service/role.service';

@Component({
    selector: 'role-list',
    templateUrl: './role-list.component.html'
})
export class RoleListComponent {
    roles: Role[] = [];

    constructor(private router: Router, private roleService: RoleService) {

    }

    ngOnInit() {
        this.roleService.getList().then((res: Role[]) => {
            this.roles = res;
            console.log("B");
            console.log(this.roles);
        }).catch(err => {
            alert(err);
        });

        console.log("A");
    }


    ngAfterViewInit() {

    }

    detail(role:Role){
        this.router.navigate(['/main/role-detail', role.id]);
    }
}