import * as JQuery from "jquery";

JQuery(".thirdSon").mouseenter(function () {
    JQuery(".thirdSon").css('transform' , 'scale(' + 1.1 + ')');
    JQuery(".thirdSon").css('transition-duration', '1.5s');
});

JQuery(".thirdSon").mouseleave(function () {
    JQuery(".thirdSon").css('transform' , 'scale(' + 1 + ')');
    // JQuery(".thirdSon").css('transition-duration', '1.5s');
});


// JQuery(".thirdSon").mouseenter(function () {
//     JQuery(".thirdSon").css('opacity',1.0);
// });

// JQuery(".thirdSon").mouseleave(function () {
//     JQuery(".thirdSon").css('opacity',0);
// });