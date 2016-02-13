$(document).ready(function () {
    setTimeout(function () {       
        $(".loading-img").hide();
        $(".content").show();
        $(".loading").fadeOut(2000);
        
    }, 2000);
});// JavaScript source code
$(window).on("load", function() {
    var src = $('.loading').css('background-image');
var url = src.match(/\((.*?)\)/)[1].replace(/('|")/g,'');

var img = new Image();
// img.onload = function() {
//     alert('image loaded');
// }
img.src = url;
if (img.complete) {
    alert("ok")
}
});

