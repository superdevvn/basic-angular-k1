import { Component } from '@angular/core';
import { Category } from './shared/category.model';
import { Router } from '@angular/router';

import { CategoryService } from './service/category.service';
import { NotificationService } from '../loadingService/notification.service';
import { LoadingService } from '../loadingService/loading.service';

@Component({
    selector: 'category-list',
    templateUrl: './category-list.component.html'
})
export class CategoryListComponent {
    categories: Category[] = [];
    constructor(private router: Router, private categoryService: CategoryService, private loadingService: LoadingService,
        private notification: NotificationService) {
    }

    ngOnInit() {
        this.loadingService.start();
        this.categoryService.getList().then((res: Category[]) => {
            this.categories = res;
            this.loadingService.stop();
            // this.notification.success('Welcome');
        }).catch(err => {
            alert(err);
            this.loadingService.stop();
        });

     
    }
    ngAfterViewInit() {
    }

    detail(category: Category) {
        this.router.navigate(['/main/category-detail', category.Id]);
    }
}