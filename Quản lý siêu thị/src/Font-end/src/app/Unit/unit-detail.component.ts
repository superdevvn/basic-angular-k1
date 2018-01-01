import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UnitService } from './../unit/service/unit.service';
import { Unit } from './shared/unit.model';

@Component({
    selector: 'unit-detail',
    templateUrl: './unit-detail.component.html'
})
export class UnitDetailComponent {
    unit: Unit = new Unit();
    id: number = 0;
    routerSubscription: any;
    constructor(private route: ActivatedRoute, private router: Router, private unitService:UnitService) {
    }

    ngOnInit() {
        this.routerSubscription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.unitService.getUnit(this.id).then((res: Unit) => {
                    this.unit = res;
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }

    save() {
        this.unitService.saveUnit(this.unit).then((res: Unit) => {
            //Server trả về role sau khi save
            //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
            this.unit = res;
            alert("Save Success");
            this.router.navigate(['/main/unit-list']);
        }).catch(err => {
            alert(err);
        })
    }

    back() {
        this.router.navigate(['/main/unit-list']);
    }
}