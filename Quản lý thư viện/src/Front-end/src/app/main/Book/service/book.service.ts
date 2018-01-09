import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { Book } from '../shared/book.model';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class BookService {
    constructor(private apiService: ApiService) { }
    saveBook(book: Book) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveBook', book).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getBooks', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getBook(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getBook/${id}`).then((res: Response) => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}

