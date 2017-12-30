import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Manufacturer } from './../Manufacturer/shared/manufacturer.model';
import { ManufacturerService } from './../Manufacturer/service/manufacturer.service';

@Component({
    selector: 'manufacturer-detail',
    templateUrl: './manufacturer-detail.component.html'
})
export class ManufacturerDetailComponent {
    manufacturer: Manufacturer = new Manufacturer();
    id: number = 0;
    routerSubscription: any;
    constructor(private route: ActivatedRoute, private router: Router, private manufacturerService: ManufacturerService) {
    }

    ngOnInit() {
        this.routerSubscription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.manufacturerService.getManufacturer(this.id).then((res: Manufacturer) => {
                    this.manufacturer = res;
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }

    save() {
        this.manufacturerService.saveManufacturer(this.manufacturer).then((res: Manufacturer) => {
            //Server trả về role sau khi save
            //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
            this.manufacturer = res;
            alert("Save Success");
        }).catch(err => {
            alert(err);
        })
    }

    back() {
        this.router.navigate(['/main/manufacturer-list']);
    }
}