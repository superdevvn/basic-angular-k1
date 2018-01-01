import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'main',
    templateUrl:'./main.component.html'
})
export class MainComponent {
    private routerSubcription:any;
    title:string;
    
    constructor(private route: ActivatedRoute, private router:Router) {
        this.routerSubcription = this.router.events.subscribe(event=> {
            if(event.constructor.name === "NavigationEnd") {
                let url = this.router.url.toString();
                switch(url)
                {
                    case "/main/dashboard": this.title = "Dashboard";
                    break;
                    case "/main/role-list": this.title = "Danh sách vai trò";
                    break;
                    case "/main/role-detail": this.title = "Chi tiết vai trò";
                    break;
                    case "/main/user-list": this.title = "Danh sách người dùng";
                    break;
                    case "/main/user-detail/0": this.title = "Chi Tiết Người Dùng";
                    break;
                    case "/main/manufacturer-list": this.title = "Danh sách nhà sản xuất";
                    break;
                    case "/main/manufacturer-detail": this.title = "Chi tiết nhà sản xuất";
                    break;
                    default: this.title = "Dashboard";
                    break;
                }
            }
         });
    }

    ngOnInit(){
        
    }
    ngAfterViewInit(){
        
    }
    ngOnDestroy(){
        this.routerSubcription.unsubcribe();
    }
}