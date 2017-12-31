import { Component } from '@angular/core';
import { Role } from './../shared/role.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from './service/role.service';

@Component({
    selector: 'role-list',
    templateUrl: './role-list.component.html',
})
export class RoleListComponent {

    roles: Role[] = [];

    constructor(private router: Router, private roleService: RoleService) {
    }

    ngOnInit() {
        this.roleService.getList().then((res: Role[]) => {
            this.roles = res;
            console.log("");
        }).catch(err => {
            alert(err);
        });

        console.log("A");
    }

    ngAfterViewInit() {
    }

    detail(role: Role) {
        this.router.navigate(['/main/role-detail', role.Id]);
    }
}