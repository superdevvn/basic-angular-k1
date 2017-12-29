import { Component } from '@angular/core';
import { Customer } from './../shared/customer.model';
import * as jquery from 'jquery';



@Component({
    selector: 'add-new-user',
    templateUrl: './add-new-user.component.html',
})
export class addNewUserComponent {




    onclick() {
        jquery('#successTable').css('opacity', 1);
        jquery('#successTable').css('transition', '1s');
        setTimeout(() => {
            jquery('#successTable').css('opacity', 0);
            jquery('#successTable').css('transition', '1s');
        }, 4000);
    }
}