import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../../api.service";
import { IndemnifyService } from "./service/indemnify.service";
import { Indemnify } from "./shared/indemnify.model";
import { NotificationService } from "../loadingService/notification.service";
import { Customer } from "../Customer/shared/customer.model";
import { CustomerService } from "../Customer/service/customer.service";
import { Book } from "../Book/shared/book.model";
import { BookService } from "../Book/service/book.service";


@Component({
    selector: "indemnify-detail",
    templateUrl: "indemnify-detail.component.html"
})
export class IndemnifyDetailComponnet {
    indemnifies: Indemnify = new Indemnify();
    customers: Customer[] = [];
    books: Book[] = [];
    routerSubscription: any;
    id: number = 0;
    constructor(private apiServe: ApiService, private router: Router,
        private indemnifyservice: IndemnifyService,
        private notification: NotificationService, private route: ActivatedRoute,
        private bookService: BookService, private customerService: CustomerService,
) { }
        ngOnInit() {
          
 
            this.routerSubscription = this.route.params.subscribe(params => {
                this.id = +params['id'];
                
                this.customerService.getList().then((customer: Customer[]) => {
                    this.customers = customer;
                    console.log(this.customers);
                    if (this.id == 0) this.indemnifies.CustomerId = customer[0].Id;
                });
                this.bookService.getList().then((book: Book[]) => {
                    this.books = book;
                    console.log(this.books);
                    if (this.id == 0) this.indemnifies.BookId = book[0].Id;
                });
    
                if (this.id > 0) {
                    this.indemnifyservice.getIndemnidy(this.id).then((res: Indemnify) => {
                        this.indemnifies = res;
                    }).catch(err => {
                        console.log(err);
                    });
                }
            });
        }

    save() {
        this.indemnifyservice.saveIndemnify(this.indemnifies).then(res => {
            this.indemnifies = res;
            this.notification.success("Saved");
        }).catch(err => {
            alert(err);
            this.notification.fail("Save failed");
        });

    }
    back() {
        this.router.navigate(['/main/indemnify-list']);
    }
  

}



