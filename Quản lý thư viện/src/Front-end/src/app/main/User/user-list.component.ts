import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './shared/UserStyle.model';
import { LoadingService } from './../loadingService/loading.service';
import { NotificationService } from './../loadingService/notification.service';
import { UserService } from './service/user.service';
@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})

export class UserListComponent {
    users: User[] = [];

    constructor(private router: Router, private userService: UserService, private loadingService: LoadingService,
         private notification: NotificationService) {
    }

    ngOnInit() {
        this.loadingService.start();
        this.userService.getList().then((res: User[]) => {
            this.loadingService.stop();
            // this.notification.success('Welcome');
            this.users = res;
        }).catch(err => {
            alert(err);
            this.loadingService.stop();
        });
    }

    ngAfterViewInit() {
        // $.getScript('assets/porto/javascripts/theme.js', function(){
        //     $.getScript('assets/porto/javascripts/theme.custom.js', function(){
        //       $.getScript('assets/porto/javascripts/theme.init.js', function(){
        //           $.getScript('assets/porto/javascripts/dashboard/examples.dashboard.js', function(){
        //           });
        //         });
        //     });
        //   });
    }

    detail(user: User) {
        this.router.navigate(['/main/user-detail', user.Id]);
    }
    delete(user: User) {
        this.userService.deleteUser(user.Id).then(() => {
            this.router.navigate(['./main/user-list']);
        });
    }
}
