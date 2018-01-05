import { Component } from '@angular/core';
import { Book } from './shared/book.model';
import { Router } from '@angular/router';
import { BookService } from './service/book.service';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html'
})
export class BookListComponent {
    book: Book[] = [];
    constructor(private router: Router, private bookService: BookService) { }
    ngOnInit() {
        this.bookService.getList().then((res: Book[]) => {
            this.book = res;
        }).catch(err => {
            alert(err);
        });
    }
    detail(book: Book) {
        this.router.navigate(['/main/book-detail', book.id]);
    }
}
