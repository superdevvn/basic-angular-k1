import { Component } from '@angular/core';
import { Book } from './shared/book.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from './service/book.service';
import { CategoryService } from '../Category/service/category.service';
import { Category } from '../Category/shared/category.model';
import { NotificationService } from '../loadingService/notification.service';

@Component({
    selector: 'book-detail',
    templateUrl: './book-detail.component.html'
})
export class BookDetailComponent {
    book: Book = new Book();
    categories: Category[] = [];
    id: number = 0;
    routerSubcription: any;
    constructor(private route: ActivatedRoute,
        private router: Router,
        private bookService: BookService,
        private categoryService: CategoryService,
        private notification: NotificationService) { }
    ngOnInit() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.categoryService.getList().then((category: Category[]) => {
                this.categories = category;
                console.log(this.categories);
                if (this.id == 0) this.book.CategoryId = category[0].Id;
            });
            if (this.id > 0) {
                this.bookService.getBook(this.id).then((res: Book) => {
                    this.book = res;
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }

    save() {
        this.bookService.saveBook(this.book).then((res: Book) => {
            this.book = res;
            this.notification.success('Saved');
        }).catch(err => {
            alert(err);
        });
    }
    back() {
        this.router.navigate(['/main/book-list']);
    }
}
