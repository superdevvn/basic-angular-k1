import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;
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
                    case "/main/category-detail": this.title = "Quản lí thể loại sách";
                    break;
                    case "/main/role-detail": this.title = "Quản lí vai trò";
                    break;
                    case "/main/user-list": this.title = "Danh sách nhân viên";
                    break;
                    case "/main/user-detail": this.title = "quản lí nhân viên";
                    break;
                    case "/main/inout-list": this.title = "Quản lí mượn trả sách";
                    break;
                    case "/main/inout-detail": this.title = "Quản lí mượn trả sách";
                    break;
                    case "/main/book-detail": this.title = "Quản lí sách";
                    break;
                    case "/main/book-list": this.title = "Quản lí sách";
                    break;
                    case "/main/customer-list": this.title = "Quản lí bạn đọc";
                    break;
                    case "/main/customer-detail": this.title = "Quản lí bạn đọc";
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
$.getScript('assets/porto/javascripts/theme.js', function(){
          $.getScript('assets/porto/javascripts/theme.custom.js', function(){
            $.getScript('assets/porto/javascripts/theme.init.js', function(){
              });
          });
        });
    }
    ngOnDestroy() {
        this.routerSubcription.unsubcribe();
    }
}