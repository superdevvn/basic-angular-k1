import { Component } from '@angular/core';
declare var $:any;
@Component({
    selector: 'calendar',
    templateUrl:'./calendar.component.html'
})
export class CalendarComponent {
    ngAfterViewInit(){                  
                        $.getScript("assets/ace-master/js/jquery-ui.custom.min.js",function(){
                            console.log("jquery-ui.custom.min");
                            $.getScript("assets/ace-master/js/jquery.ui.touch-punch.min.js",function(){
                                console.log("jquery.ui.touch-punch.min");
                                $.getScript("assets/ace-master/js/moment.min.js",function(){
                                    console.log("moment.min");
                                    $.getScript("assets/ace-master/js/fullcalendar.min.js",function(){
                                        console.log("fullcalendar.min");
                                        $.getScript("assets/ace-master/js/bootbox.js",function(){
                                            console.log("bootbox");
                                            $.getScript("assets/ace-master/js/calendar.js",function(){
                                                console.log("calendar");                                            
                                                    $.getScript("assets/ace-master/js/bootstrap.min.js",function(){
                                                        console.log("bootstrap.min");
                                                        $.getScript("assets/ace-master/js/jquery-2.1.4.min.js",function(){
                                                            console.log("jquery-2.1.4");                                    
                                                  });
                                              });
                                          });
                                      });
                                  });
                              });
                          });
                      });
      

    }
}

