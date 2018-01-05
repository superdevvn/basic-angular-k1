import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './shared/user.model';
import { UserService } from './service/user.service';
@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent {
    users: User[] = [];

    constructor(private router: Router, private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getList().then((res: User[]) => {
            this.users = res;
        }).catch(err => {
            alert(err);
        });
    }

    ngAfterViewInit() {
    }

    detail(user: User) {
        this.router.navigate(['/main/user-detail', user.Id]);
    }
}