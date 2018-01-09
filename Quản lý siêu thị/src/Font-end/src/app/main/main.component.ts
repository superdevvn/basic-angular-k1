import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { futimes } from 'fs';
import { LoginService } from '../authorize/service/login.service';
declare var $:any;
@Component({
    selector: 'main',
    templateUrl:'./main.component.html',
})
export class MainComponent {
    private routerSubcription:any;
    title:string;
    
    constructor(private route: ActivatedRoute, private router:Router,private LoginService:LoginService) {
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
        this.LoginService.getAuthorize().catch(()=>{
            this.router.navigate(['login']);
        });
    }
    ngAfterViewInit(){   
        // $.getScript("assets/ace-master/js/ace-elements.min.js",function(){
        //     console.log("ace-elements.min");
        //   $.getScript("assets/ace-master/js/ace.min.js",function(){
        //     console.log("ace.min");
            // $.getScript("assets/ace-master/js/load.js",function(){
            //     console.log("load");
            // $.getScript("assets/ace-master/js/jquery-2.1.4.min.js",function(){
            //     console.log("jquery-2.1.4");
            //   $.getScript("assets/ace-master/js/bootstrap.min.js",function(){
            //             console.log("bootstrap.min");              
                //   });
            //   });
            //   });
        //   }); 
        // });
    }
    ngOnDestroy(){
        if(this.routerSubcription) this.routerSubcription.unsubscribe();
    }
}
// <script src="assets/ace-master/js/jquery-ui.custom.min.js"></script>
// <script src="assets/ace-master/js/jquery.ui.touch-punch.min.js"></script>
// <script src="assets/ace-master/js/moment.min.js"></script>
// <script src="assets/ace-master/js/fullcalendar.min.js"></script>
// <script src="assets/ace-master/js/bootbox.js"></script>
