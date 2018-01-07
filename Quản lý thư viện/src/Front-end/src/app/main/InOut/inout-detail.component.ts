import { Component } from '@angular/core';
import { InOut } from './Shared/inout.model';
import { ActivatedRoute, Router } from '@angular/router';
import { InOutService } from './service/inout.service';
import { User } from '../User/shared/UserStyle.model';
import { Customer } from '../Customer/shared/customer.model';
import { Book } from '../Book/shared/book.model';
import { UserService } from '../User/service/user.service';
import { CustomerService } from '../Customer/service/customer.service';
import { BookService } from '../Book/service/book.service';

@Component({
    selector: 'inout-detail',
    templateUrl: './inout-detail.component.html'
})
export class InOutDetailComponent {
    inout: InOut = new InOut();
    users: User[] = [];
    customers: Customer[] = [];
    books: Book[] = [];
    id: number = 0;
    routerSubscription: any;


    constructor(private route: ActivatedRoute,
        private router: Router,
        private inoutService: InOutService,
        private userService: UserService,
        private customerService: CustomerService,
        private bookService: BookService) { }

    ngOnInit() {
        this.routerSubscription = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.userService.getList().then((user: User[]) => {
                this.users = user;
                console.log(this.users);
                if (this.id == 0) this.inout.UserId = user[0].Id;
            });
            this.customerService.getList().then((customer: Customer[]) => {
                this.customers = customer;
                console.log(this.customers);
                if (this.id == 0) this.inout.CusomerId = customer[0].Id;
            });
            this.bookService.getList().then((book: Book[]) => {
                this.books = book;
                console.log(this.books);
                if (this.id == 0) this.inout.BookId = book[0].Id;
            });

            if (this.id > 0) {
                this.inoutService.getInOut(this.id).then((res: InOut) => {
                    this.inout = res;
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }

    save() {
        this.inoutService.saveInOut(this.inout).then((res: InOut) => {
            this.inout = res;
            alert("Save Success");
        }).catch(err => {
            alert(err);
        })
    }

    back() {
        this.router.navigate(['/main/inout-list']);
    }


    ngAfterViewInit() {
    }
}
