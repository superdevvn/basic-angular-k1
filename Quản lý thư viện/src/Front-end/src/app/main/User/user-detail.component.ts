import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InOut } from '../InOut/Shared/inout.model';
@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
    role: InOut = new InOut();
    Id: number = 0;
    RoleId: number = 0;
    Username: string;
    FirstName: string;
    LastName: string;
    Description: string;
    IsActived: string;
    CreateDate: string;
    CreateBy: string;
    // constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {

    // }
    // back() {
    //     this.router.navigate(['/main/user-detail']);
    // }
}