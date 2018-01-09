import { Component } from '@angular/core';
import { Customer } from './shared/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './service/customer.service';

@Component({
    selector: 'customer-detail',
    templateUrl: './customer-detail.component.html'
})
export class CustomerDetailComponent {
    customer: Customer = new Customer();
    id: number = 0;
    routerSubscription: any;
    constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService) { }

    ngOnInit() {
        this.routerSubscription = this.route.params.subscribe(params => {//
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.customerService.getCustomer(this.id).then((res: Customer) => {
                    this.customer = res;
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }

    save() {
        this.customerService.saveCustomer(this.customer).then(res => {
            this.customer = res;
            alert("Save Success");
        }).catch(err => {
            alert(err);
        });
    }

    back() {
        this.router.navigate(['/main/customer-list']);
    }
}
