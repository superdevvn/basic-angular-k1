import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './shared/user.model';
import { UserService } from './service/user.service';
import { LoadingService } from '../service/loading.service';
 
import { NotificationService } from '../main/service/notification.service';
@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent {
    users: User[] = [];
    constructor(private router: Router, private userService: UserService,private loadingService:LoadingService,
    private Notification:NotificationService) {
    }

    ngOnInit() {
        this.loadingService.start();
        this.userService.getList().then((res: User[]) => {
            this.users = res;
            console.log("");
            this.loadingService.stop();
            this.Notification.success("Success");
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