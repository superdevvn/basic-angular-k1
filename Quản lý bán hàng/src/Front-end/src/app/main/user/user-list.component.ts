import { Component } from '@angular/core';
import { Customer } from './../shared/customer.model';
import * as jquery from 'jquery';



@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
})
export class UserListComponent {

    
    onclick() {
        var value = document.getElementById('searchBar').style.opacity;
        if (value === '0') {
            jquery('#searchBar').css('opacity', 1);
            jquery('#searchBar').css('transition', '1s');
        } else {
            jquery('#searchBar').css('opacity', 0);
            jquery('#searchBar').css('transition', '1s');
        }
    }

}