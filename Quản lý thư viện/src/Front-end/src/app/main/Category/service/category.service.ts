import { Injectable } from "@angular/core";
import { ApiService } from "../../../api.service";
import { Category } from "../shared/category.model";




@Injectable()
export class CategoryService{
constructor(private apiService: ApiService){}

saveCategory(category: Category){
return new Promise<Category> ((resolve, reject)=>{
this.apiService.post('api/saveCategory', category).then((res:Response)=>{
resolve(res.json());
}).catch(err=>{
    reject(err);
});

});

}
getList() {
    return new Promise((resolve, reject) => {
        this.apiService.post('api/getCategories',{}).then((res:Response) => {
            resolve(res.json());
        }).catch(err => {
            reject(err);
        });
    });
}

getCategory(id) {
    return new Promise((resolve, reject) => {
        this.apiService.get(`api/getCategory/${id}`).then((res:Response) => {
            resolve(res.json());
        }).catch(err => {
            reject(err);
        });
    });
}
}