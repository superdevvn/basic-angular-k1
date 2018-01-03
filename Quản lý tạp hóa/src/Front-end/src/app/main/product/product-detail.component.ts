import { Component } from "@angular/core";
import { ProductService } from "./service/product.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "./shared/product.model";
import { CategoryService } from "../category/service/category.service";
import { Category } from "../category/shared/category.model";
import { UnitService } from "../unit/service/unit.service";
import { Unit } from "../unit/shared/unit.model";

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
    product = new Product;
    id: number = 0;
    routeSubcription: any;
    title: string;
    categories: Category[] = [];
    units: Unit[] = [];
    constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, 
        private categoryService: CategoryService, private unitService: UnitService) { }

    ngOnInit() {
        this.categoryService.getList().then((res: Category[]) => {
            this.categories = res;
            console.log(this.categories);
        }).catch(err => {
            alert(err);
        });
        this.unitService.getList().then((res: Unit[]) => {
            this.units = res;
            console.log(this.units);
        }).catch(err => {
            alert(err);
        });
        this.routeSubcription = this.route.params.subscribe(params => {
            this.id = +params['id'];
            if (this.id > 0) {
                this.title = "Bạn đang chỉnh sửa thông tin sản phẩm";
                this.productService.getProduct(this.id).then((res: Product) => {
                    this.product = res;
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.title = "Bạn đang tạo mới sản phẩm";
            }
        });
    }

    save() {
        this.productService.saveProduct(this.product).then((res: Product) => {
            if (this.id == 0) {
                this.router.navigate(['/main/product-detail', res.Id]);
            }
        }).catch(err => {
            console.log(err);
        });
    }

    back() {
        this.router.navigate(['/main/product-list']);
    }
}