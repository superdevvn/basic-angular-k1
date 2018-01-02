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
                switch (url)
                {
                    case "/main/dashboard": this.title = "Trang chủ";
                    break;
                    case "/main/role-list": this.title = "Quản lí vai trò";
                    break;
                    case "/main/category-list": this.title = "Quản lí thể loại sách";
                    break;
                    case "/main/category-detail/0": this.title = "Quản lí thể loại sách";
                    break;
                    case "/main/role-detail/0": this.title = "Quản lí vai trò";
                    break;
                    case "/main/user-list": this.title = "Danh sách tài khoản người dùng";
                    break;
                    case "/main/user-detail": this.title = "quản lí tài khoản người dùng";
                    break;
                    case "/main/inout-list": this.title = "Quản lí mượn trả sách";
                    break;
                    case "/main/inout-detail": this.title = "Quản lí mượn trả sách";
                    break;
                    default: this.title = "Trang chủ";
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