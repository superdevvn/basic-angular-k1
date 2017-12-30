import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './shared/user.model';
import { UserService } from './service/user.service';
import { RoleService } from '../Role/service/role.service';
import { Role } from '../Role/shared/role.model';
@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
    user: User = new User();
    roles: Role[] = [];
    id: number = 0;
    routerSubscription: any;
    constructor(private route: ActivatedRoute, 
        private router: Router, 
        private userService: UserService,
        private roleService: RoleService) {
    }

    ngOnInit() {
        this.roleService.getList().then((roles:Role[])=>{
            this.roles=roles;
            console.log(this.roles);
        });
        this.routerSubscription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.userService.getUser(this.id).then((res: User) => {
                    this.user = res;
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }

    save() {
        this.userService.saveUser(this.user).then((res: User ) => {
            //Server trả về role sau khi save
            //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
            this.user = res;
            alert("Save Success");
        }).catch(err => {
            alert(err);
        })
    }

    back() {
        this.router.navigate(['/main/user-list']);
    }
}