import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;
@Component({
    selector: 'main',
    templateUrl: './main.component.html'
})
export class MainComponent {
    private routerSubcription: any;
    title: string;
    constructor(private route: ActivatedRoute, private router: Router) {
        var a = this.router.events.subscribe(event => {
            if (event.constructor.name === "NavigationEnd") {
                let url = this.router.url.toString();
                if (url.includes("dashboard")) {
                    this.title = "Dashboard";
                } else if (url.includes("role")) {
                    this.title = "Vai trò";
                } else if (url.includes("user")) {
                    this.title = "Tài khoản";
                } else if (url.includes("product")) {
                    this.title = "Sản phẩm";
                } else if (url.includes("supplier")) {
                    this.title = "Nhà cung cấp";
                } else if (url.includes("manufacturer")) {
                    this.title = "Nhà sản xuất";
                } else if (url.includes("unit")) {
                    this.title = "Đơn vị";
                }
            }
        });
    }

    ngOnInit() {

    }
    ngAfterViewInit() {
        // Lazy load js
        $.getScript("assets/porto/javascripts/theme.js", function(){
            $.getScript("assets/porto/javascripts/theme.custom.js", function(){
                $.getScript("assets/porto/javascripts/theme.init.js", function(){

                });
            });
        });
    }
    ngOnDestroy() {
        if (this.routerSubcription) this.routerSubcription.unsubscribe();
    }
}