import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './shared/user.model';
import { UserService } from './service/user.service';
@Component({
    selector: 'user-list',
    templateUrl:'./user-list.component.html'
})
export class UserListComponent {
    // router: Router;
    // onClick(){
    //     this.router.navigateByUrl('/main/add-new-user');
    // }
    users: User[] = [];
    constructor(private router: Router, private userService: UserService) {
        
            }
        
            ngOnInit() {
                this.userService.getList().then((res: User[]) => {
                    this.users = res;
                    console.log("B");
                    console.log(this.users);
                }).catch(err => {
                    alert(err);
                });
        
                console.log("A");
            }
        
        
            ngAfterViewInit() {
        
            }
        
            detail(role:User){
                this.router.navigate(['/main/role-detail', role.Id]);
            }
}