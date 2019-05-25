import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Manufacturer } from './shared/manufacturer.model';
import { ManufacturerService } from './service/manufacturer.service';

@Component({
    selector: 'manufacturer-list',
    templateUrl:'./manufacturer-list.component.html'
})
export class ManufacturerListComponent {

    manufacturers:Manufacturer[] = [];

    constructor(private router: Router, private manufacturerService: ManufacturerService) {
    }

    ngOnInit(){
        this.manufacturerService.getList().then((res:Manufacturer[])=>{
            this.manufacturers = res;
            console.log("B");
        }).catch(err=>{
            alert(err);
        });

        console.log("A");
    }

    ngAfterViewInit(){
    }

    detail(manufacturer:Manufacturer){
        this.router.navigate(['/main/manufacturer-detail',manufacturer.Id]);
    }
    // delete(id: number) {
    //    const index= this.roles.findIndex(role => role.Id === id)
    //         this.roles.slice(index,1);
    //         alert("delete Success");

    // }
    // delete(id: number) {
    //     this.manufacturerService.deleteRole(this.roles).then((res: Role[]) => {
    //         //Server trả về role sau khi save
    //         //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
    //         this.roles = res;
    //         const index= this.roles.findIndex(role => role.Id === id)
    //         this.roles.slice(index,1);
    //         alert("delete Success");
    //     }).catch(err => {
    //         alert(err);
    //     })
    // }
}