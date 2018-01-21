import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from './service/role.service';
import { Role } from './shared/role.model';
import { LoadingService } from '../loadingService/loading.service';
import { NotificationService } from '../loadingService/notification.service';

@Component({
    selector: 'role-list',
    templateUrl: './role-list.component.html'
})

export class RoleListComponent {

    roles: Role[] = [];

    constructor(private router: Router, private roleService: RoleService, private loadingService: LoadingService,
        private notification: NotificationService) {
    }

    ngOnInit() {
        this.loadingService.start();
        this.roleService.getList().then((res: Role[]) => {
            this.roles = res;
            this.loadingService.stop();
         
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

    detail(role: Role) {
        this.router.navigate(['/main/role-detail', role.Id]);
    }
}