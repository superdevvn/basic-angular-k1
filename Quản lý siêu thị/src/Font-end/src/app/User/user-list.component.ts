import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './shared/user.model';
import { UserService } from './service/user.service';
import { LoadingService } from '../service/loading.service';
<<<<<<< HEAD
 
import { NotificationService } from '../main/service/notification.service';
=======
import { NotificationService } from '../service/notification.service';

>>>>>>> 31ecb4387c48ccf56bdeff4efb62e6919bbbda15
@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent {
    users: User[] = [];
<<<<<<< HEAD
    constructor(private router: Router, private userService: UserService,private loadingService:LoadingService,
    private Notification:NotificationService) {
=======

    constructor(private router: Router, private userService: UserService, private loadingService:LoadingService,
        private notificationService: NotificationService) {
>>>>>>> 31ecb4387c48ccf56bdeff4efb62e6919bbbda15
    }
    
    ngOnInit() {
<<<<<<< HEAD
        this.loadingService.start();
        this.userService.getList().then((res: User[]) => {
            this.users = res;
            console.log("");
            this.loadingService.stop();
            this.Notification.success("Success");
        }).catch(err => {
            alert(err);
            
=======
        // this.loadingService.start();
        this.userService.getList().then((res: User[]) => {
            this.users = res;
            // this.loadingService.stop();
            // this.notificationService.success("Thành Công");
            
        }).catch(err => {
            alert(err);
            this.loadingService.stop();
>>>>>>> 31ecb4387c48ccf56bdeff4efb62e6919bbbda15
        });
    }

    ngAfterViewInit() {
    }

    detail(user: User) {
        this.router.navigate(['/main/user-detail', user.Id]);
    }
}