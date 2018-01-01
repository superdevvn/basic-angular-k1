import { Component } from "@angular/core";
import { ProductService } from "./service/product.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "./shared/product.model";

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
    product = new Product;
    id: number = 0;
    routeSubcription: any;
    title: string;
    constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

    ngOnInit() {
        this.routeSubcription = this.route.params.subscribe(params => {
            this.id = +params['id'];
            if (this.id > 0) {
                this.title = "Bạn đang chỉnh sửa thông tin hàng hóa";
                this.productService.getProduct(this.id).then((res: Product) => {
                    this.product = res;
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.title = "Bạn đang tạo mới hàng hóa";
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