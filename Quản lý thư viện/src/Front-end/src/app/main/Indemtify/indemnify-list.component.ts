import { Router } from "@angular/router";
import { IndemnifyService } from "./service/indemnify.service";
import { Component } from "@angular/core";
import { ApiService } from "../../api.service";
import { LoadingService } from "./../loadingService/loading.service";
import { NotificationService } from "./../loadingService/notification.service";
import { Indemnify } from "./shared/indemnify.model";

@Component({
    selector: "indemnify-list",
    templateUrl: "indemnify-list.component.html"
})
export class IndemnifyListComponent {
    indemnifies: Indemnify[] = [];

    constructor(private apiService: ApiService, private router: Router,
        private indemnifyService: IndemnifyService, private notification: NotificationService, private loading: LoadingService) {
    }
    ngOnInit() {
        this.loading.start();
        this.indemnifyService.getList().then((res: Indemnify[]) => {
            this.indemnifies = res;
            this.loading.stop();
        }).catch(err => {
            alert(err);
            this.loading.stop();
        })
    }
    detail(indemnify: Indemnify) {
        this.router.navigate(["./main/indemnify-detail", indemnify.Id]);
    }
    delete(indemnidy: Indemnify) {
        this.indemnifyService.delete(indemnidy).then(res => {
            alert(res);
            this.router.navigate(["./main/indemnify-list"]);
        }).catch(err => {
            alert(err);
            this.router.navigate(["./main/indemnify-list"]);
        })


    }

}