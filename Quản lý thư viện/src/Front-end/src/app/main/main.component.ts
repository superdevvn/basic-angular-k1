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
                    case "/main/user-detail": this.title = "Chi tiết người dùng";
                    break;
                    case "/main/homework": this.title = " Bài tập về nhà";
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