import { Component } from '@angular/core';
import { Category } from './shared/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './service/category.service';
import { NotificationService } from '../loadingService/notification.service';

@Component({
    selector: 'category-detail',
    templateUrl:'./category-detail.component.html'
})
export class CategoryDetailComponent {
    category: Category = new Category();
    id: number = 0;
    routerSubscription: any;
    constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService,
    private notification: NotificationService) {
    }

    ngOnInit() {
        this.routerSubscription = this.route.params.subscribe(params => {//
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.categoryService.getCategory(this.id).then((res: Category) => {
                    this.category = res;
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }

    save() {
        this.categoryService.saveCategory(this.category).then(res => {
            this.category = res;
            this.notification.success('Saved');
        }).catch(err => {
            alert(err);
        });
    }

    back() {
        this.router.navigate(['/main/category-list']);
    }
}
