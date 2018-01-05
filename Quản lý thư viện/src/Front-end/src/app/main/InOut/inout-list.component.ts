import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InOutService } from './service/inout.service';
import { InOut } from './Shared/inout.model';
@Component({
    selector: 'inout-list',
    templateUrl: './inout-list.component.html'
})
export class InOutListComponent {
    inout: InOut[] = [];
    constructor(private router: Router, private inoutService: InOutService) { }
    ngOnInit() {
        this.inoutService.getList().then((res: InOut[]) => {
            this.inout = res;
        }).catch(err => {
            alert(err);
        });
    }
    ngAfterViewInit() { }
    detail(inout: InOut) {
        this.router.navigate(['/main/inout-detail', inout.Id]);
    }
}

