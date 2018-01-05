import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Unit } from './shared/unit.model';
import { UnitService } from './service/unit.service';
@Component({
    selector: 'unit-list',
    templateUrl: './unit-list.component.html'
})
export class UnitListComponent {
    units: Unit[] = [];

    constructor(private router: Router, private unitService: UnitService) {
    }

    ngOnInit() {
        this.unitService.getList().then((res: Unit[]) => {
            this.units = res;
        }).catch(err => {
            alert(err);
        });
    }

    ngAfterViewInit() {
    }

    detail(unit: Unit) {
        this.router.navigate(['/main/unit-detail', unit.Id]);
    }
}