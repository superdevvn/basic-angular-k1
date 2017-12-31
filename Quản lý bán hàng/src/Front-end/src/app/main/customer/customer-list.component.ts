import { Component } from '@angular/core';
import * as jquery from 'jquery';

@Component({
    selector: 'customer-list',
    templateUrl: './customer-list.component.html',
})
export class CustomerListComponent {
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