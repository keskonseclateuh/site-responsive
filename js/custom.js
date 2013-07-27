$(function() {
// OPACITY OF BUTTON SET TO 0%
    $(".roll").width($(".thumbnail").width());
    console.log($(".thumbnail").width()) ;
    $(".roll").height($(".thumbnail").height());
$(".roll").css("opacity","0");
 
// ON MOUSE OVER
$(".roll").hover(function () {
 
// SET OPACITY TO 60%
$(this).stop().animate({
opacity: .6
}, "slow");
},
 
// ON MOUSE OUT
function () {
 
// SET OPACITY BACK TO 30%
$(this).stop().animate({
opacity: 0
}, "slow");
});
});



2
3
$(window).resize(function() {
    $(".roll").width($(".span3").width());
    console.log($(".span3").width()) ;
    $(".roll").height($(".span3").height());
});