import { Component } from '@angular/core';
import * as $ from 'jquery';
import { setInterval } from 'timers';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  listOfImage: string[] = ['waterfall.jpg', 'handsome.jpg', 'handsome1.jpg'];

  ngOnInit() {
    $('#login-area').css('opacity', 0);
    setTimeout(() => {
      $('#login-area').css('opacity', 1);
      $('#login-area').css('transition', '1.5s');
    }, 500);
    // let image = './../../assets/images/' + this.listOfImage[0];
    // $('#containner').css('background-image', image);
    // alert('tuan anh dep trai');
    // var i = 0;
    // setInterval(() => {
    //   image = './../../assets/images/' + this.listOfImage[i];
    //   i++;
    //   if (i >= this.listOfImage.length) {
    //     i = 0;
    //   }
    // }, 1500);
  }







}
