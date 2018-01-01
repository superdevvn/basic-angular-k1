import { Component } from '@angular/core';
import { Category } from './shared/category.model';
import { CategoryService } from './service/category.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'category-detail',
    templateUrl: './category-detail.component.html'
})
export class CategoryDetailComponent {
    category: Category = new Category();
    id: number = 0;
    routerSubscription: any;
    constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService ) { }
    ngOnInit() {
        this.routerSubscription = this.route.params.subscribe(params => {
            this.id = +params['id'];
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
        this.categoryService.saveCategory(this.category).then((res: Category) => {
            this.category = res;
            alert("Save success");
        }).catch(err => {
            alert(err);
        });
    }
    back() {
        this.router.navigate(['/main/category-list']);
    }
}
