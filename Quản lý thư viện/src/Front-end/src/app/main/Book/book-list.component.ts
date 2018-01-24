import { Component } from '@angular/core';
import { Book } from './shared/book.model';
import { Router } from '@angular/router';
import { BookService } from './service/book.service';
import { LoadingService } from './../loadingService/loading.service';
import { NotificationService } from './../loadingService/notification.service';


@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html'
})
export class BookListComponent {
    books: Book[] = [];
    constructor(private router: Router, private bookService: BookService,  private loadingService: LoadingService,
        private notification: NotificationService) { }
    ngOnInit() {
        this.loadingService.start();
        this.bookService.getList().then((res: Book[]) => {
            this.books = res;
            this.loadingService.stop();
            // this.notification.success('Welcome');
        }).catch(err => {
            alert(err);
            this.loadingService.stop();
        });
    }
    detail(book: Book) {
        this.router.navigate(['/main/book-detail', book.Id]);
    }
}
