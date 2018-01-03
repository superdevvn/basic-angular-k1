import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD
=======
import { futimes } from 'fs';
>>>>>>> cd8a2dce1afd751c3220f7a0110d9cab7d13476c
declare var $:any;
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
                    case "/main/manufacturer-detail/0": this.title = "Chi tiết nhà sản xuất";
                    break;
                    case "/main/unit-list": this.title = "Danh sách Đơn vị";
                    break;
                    case "/main/unit-detail": this.title = "Chi tiết Đơn vị";
                    break;
                    case "/main/warehouse-list": this.title = "Danh sách Kho";
                    break;
                    case "/main/warehouse-detail/0": this.title = "Chi tiết Kho";
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
<<<<<<< HEAD
       $.getScript("assets/ace-master/js/ace-elements.min.js", function(){
        $.getScript("assets/ace-master/js/ace.min.js",function(){
        //   $.getScript("app/main/load.main.min.js",function(){

        //   });  
        });
       });
     }
=======
        $.getScript("assets/ace-master/js/ace-elements.min.js",function(){
            console.log("ace-elements.min");
          $.getScript("assets/ace-master/js/ace.min.js",function(){
            console.log("ace.min");
            $.getScript("assets/ace-master/js/load.js",function(){
                console.log("ace-elements.min");
              });
          }); 
        });
    }
>>>>>>> cd8a2dce1afd751c3220f7a0110d9cab7d13476c
    ngOnDestroy(){
        if(this.routerSubcription) this.routerSubcription.unsubscribe();
    }
}