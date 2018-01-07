import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './shared/user.model';
import { UserService } from './service/user.service';
import { LoadingService } from '../service/loadingService';
import { NotificationService } from '../service/notification.service';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    // styleUrls:['']
})
export class UserListComponent {

    users: User[] = [];
    constructor(private router: Router, private userService: UserService, private loadingService: LoadingService,
    private notificationService: NotificationService) {  }

    ngOnInit() {
        this.notificationService.success("Thanh cong");
        this.loadingService.start();
        this.userService.getList().then((res: User[]) => {
            this.users = res;
            this.loadingService.stop();
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