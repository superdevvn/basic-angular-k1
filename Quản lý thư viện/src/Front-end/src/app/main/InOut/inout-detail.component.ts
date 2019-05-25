import { Component } from '@angular/core';
import { InOut } from './Shared/inout.model';
import { ActivatedRoute, Router } from '@angular/router';
import { InOutService } from './service/inout.service';

@Component({
    selector: 'inout-detail',
    templateUrl:'./inout-detail.component.html'
})
export class InOutDetailComponent {
    inout: InOut = new InOut();
    id: number = 0;
    routerSubscription: any;
    constructor(private route: ActivatedRoute, private router: Router, private inoutService: InOutService) {
    }

    ngOnInit() {
        this.routerSubscription = this.route.params.subscribe(params => {//
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.inoutService.getInOut(this.id).then((res: InOut) => {
                    this.inout = res;
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }

    save() {
        this.inoutService.saveInOut(this.inout).then((res: InOut) => {
            alert("Save Success");
        }).catch(err => {
            alert(err);
        })
    }

    back() {
        this.router.navigate(['/main/inout-list']);
    }


    ngAfterViewInit(){
    }
}
