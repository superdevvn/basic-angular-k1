import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WarehouseService } from './../warehouse/service/warehouse.service';
import { Warehouse } from './shared/warehouse.model';

@Component({
    selector: 'warehouse-detail',
    templateUrl: './warehouse-detail.component.html'
})
export class WarehouseDetailComponent {
    warehouse: Warehouse = new Warehouse();
    id: number = 0;
    routerSubscription: any;
    constructor(private route: ActivatedRoute, private router: Router, private warehouseService:WarehouseService) {
    }

    ngOnInit() {
        this.routerSubscription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.warehouseService.getWarehouse(this.id).then((res: Warehouse) => {
                    this.warehouse = res;
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }

    save() {
        this.warehouseService.saveWarehouse(this.warehouse).then((res: Warehouse) => {
            //Server trả về role sau khi save
            //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
            this.warehouse = res;
            alert("Save Success");
            this.router.navigate(['/main/warehouse-list']);
        }).catch(err => {
            alert(err);
        })
    }

    back() {
        this.router.navigate(['/main/warehouse-list']);
    }
}