import { Component } from '@angular/core';
import { Customer } from './shared/customer.model';
import { Router } from '@angular/router';

import { CustomerService } from './service/customer.service';

@Component({
    selector: 'customer-list',
    templateUrl: './customer-list.component.html'
})
export class CustomerListComponent {
customers: Customer[] = [];
constructor(private router: Router, private customerService: CustomerService) {
}

ngOnInit() {
    this.customerService.getList().then((res: Customer[]) => {
        this.customers = res;
    }).catch(err => {
        alert(err);
    });

    console.log("A");
}
    detail(customer: Customer) {
        this.router.navigate(['/main/customer-detail', customer.Id]);
    }
}
