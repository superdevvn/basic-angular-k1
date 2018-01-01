import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Warehouse } from './shared/warehouse.model';
import { WarehouseService } from './service/warehouse.service';
@Component({
    selector: 'warehouse-list',
    templateUrl: './warehouse-list.component.html'
})
export class WarehouseListComponent {
    warehouses: Warehouse[] = [];

    constructor(private router: Router, private warehouseService: WarehouseService) {
    }

    ngOnInit() {
        this.warehouseService.getList().then((res: Warehouse[]) => {
            this.warehouses = res;
        }).catch(err => {
            alert(err);
        });
    }

    ngAfterViewInit() {
    }

    detail(warehouse: Warehouse) {
        this.router.navigate(['/main/warehouse-detail', warehouse.Id]);
    }
}