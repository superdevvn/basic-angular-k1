import { Component } from '@angular/core';
import { Customer } from './shared/customer.model';
import { Router } from '@angular/router';
import { LoadingService } from './../loadingService/loading.service';
import { NotificationService } from './../loadingService/notification.service';
import { CustomerService } from './service/customer.service';

@Component({
    selector: 'customer-list',
    templateUrl: './customer-list.component.html'
})
export class CustomerListComponent {
customers: Customer[] = [];
constructor(private router: Router, private customerService: CustomerService,   private loadingService: LoadingService,
    private notification: NotificationService) {
}

ngOnInit() {
    this.loadingService.start();
    this.customerService.getList().then((res: Customer[]) => {
        this.customers = res;
        this.loadingService.stop();
        // this.notification.success('Welcome');
    }).catch(err => {
        alert(err);
        this.loadingService.stop();
    });
}
    detail(customer: Customer) {
        this.router.navigate(['/main/customer-detail', customer.Id]);
    }
    delete(customer: Customer) {
        this.customerService.delete(customer.Id).then(() => {
            this.router.navigate(['./main/customer-list']);

        });
    
    }

}
