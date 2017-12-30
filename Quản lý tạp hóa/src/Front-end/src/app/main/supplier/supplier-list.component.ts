import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from './service/supplier.service';
import { Suppiler } from './shared/supplier.model';
@Component({
    selector: 'supplier-list',
    templateUrl:'./supplier-list.component.html'
})
export class SupplierListComponent {
    suppliers:Suppiler[] = [];
    constructor(private router: Router, private supplierService: SupplierService) {
    }

    ngOnInit(){
        this.supplierService.getList().then((res:Suppiler[])=>{
            this.suppliers = res;
            console.log("B");
        }).catch(err=>{
            alert(err);
        });

        console.log("A");
    }

    ngAfterViewInit(){
    }

    detail(suppiler:Suppiler){
        this.router.navigate(['/main/supplier-detail',suppiler.id]);
    }
}