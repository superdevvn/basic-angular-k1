import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from './../role/service/role.service';
import { Role } from './../role/shared/role.model';

@Component({
    selector: 'role-list',
    templateUrl:'./role-list.component.html'
})
export class RoleListComponent {

    roles:Role[] = [];

    constructor(private router: Router, private roleService: RoleService) {
    }

    ngOnInit(){
        this.roleService.getList().then((res:Role[])=>{
            this.roles = res;
            console.log("B");
        }).catch(err=>{
            alert(err);
        });

        console.log("A");
    }

    ngAfterViewInit(){
    }

    detail(role:Role){
        this.router.navigate(['/main/role-detail',role.Id]);
    }
    // delete(id: number) {
    //    const index= this.roles.findIndex(role => role.Id === id)
    //         this.roles.slice(index,1);
    //         alert("delete Success");

    // }
    delete(id: number) {
        this.roleService.deleteRole(this.roles).then((res: Role[]) => {
            //Server trả về role sau khi save
            //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
            this.roles = res;
            const index= this.roles.findIndex(role => role.Id === id)
            this.roles.slice(index,1);
            alert("delete Success");
        }).catch(err => {
            alert(err);
        })
    }
}