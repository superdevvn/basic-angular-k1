import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Role } from './shared/role.model';
import { RoleService } from './service/role.service';

@Component({
    selector: 'role-detail',
    templateUrl: './role-detail.component.html'
})
export class RoleDetailComponent {
    role = new Role();
    routerSubcription: any;
    id: number = 0;
    constructor(private route: ActivatedRoute, private router: Router, private roleService: RoleService) {
    }

    ngOnInit() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.roleService.getRole(this.id).then((res: Role) => {
                    this.role = res;
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }
    save() {
        this.roleService.saveRole(this.role).then((res: Role) => {
            //Server trả về role sau khi save
            //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
            this.role = res;
            alert("Save success");
        }).catch(err => {
            alert(err);
        });
    }

    back() {
        this.router.navigate(['/main/role-list']);
    }
}