import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InOutService } from './service/inout.service';
import { InOut } from './Shared/inout.model';
import { LoadingService } from '../loadingService/loading.service';
import { NotificationService } from '../loadingService/notification.service';
@Component({
    selector: 'inout-list',
    templateUrl: './inout-list.component.html'
})
export class InOutListComponent {
    inouts: InOut[] = [];
    constructor(private router: Router, private inoutService: InOutService,   private loadingService: LoadingService,
        private notification: NotificationService) { }
    ngOnInit() {
        this.loadingService.start();
   
             this.inoutService.getList().then((res: InOut[]) => {
            this.inouts = res;
            this.loadingService.stop();
                
        }).catch(err => {
            alert(err);
            this.loadingService.stop();
        });
    }
    ngAfterViewInit() { }
    detail(inout: InOut) {
        this.router.navigate(['/main/inout-detail', inout.Id]);
    }
}

