import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from './service/category.service';
import { Category } from './shared/category.model';

@Component({
    selector: 'category-list',
    templateUrl: './category-list.component.html'
})
export class CategoryListComponent {
    categories: Category[] = [];
    constructor(private router: Router, private categoryService: CategoryService) { }

    ngOnInit() {
        this.categoryService.getList().then((res: Category[]) => {
            this.categories = res;
        }).catch(err => {
            alert(err);
        });
    }
    detail(category: Category) {
        this.router.navigate(['/main/category-detail', category.Id]);
    }
}
