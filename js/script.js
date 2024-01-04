$(function(){
// //메뉴1
// $(".main > li, .sub_bg").mouseover(function(){
//     $(".sub , .sub_bg").stop().slideDown()
// })//main > li").mouseover
// $(".main > li, .sub_bg").mouseout(function(){
//     $(".sub , .sub_bg").stop().slideUp()
// })//main > li").mouseout

//메뉴2
$(".main > li, .sub_bg").hover(function(){
    $(".sub , .sub_bg").stop().slideDown()
}, function(){
    $(".sub , .sub_bg").stop().slideUp()
})//main > li").hover

//이미지 슬라이드1
// $(".move li:gt(0)").hide();
// $(".move li").eq(0).siblings().hide();

// var n=0; //현재 보일 인덱스 번호 0~2
// setInterval(  move  ,2000)

// function move(){
//     $(".move li").eq(n).fadeOut();
//     // if(n == 2){
//     //     n=0;
//     // }else{
//     //     n++;
//     // }
//     // console.log("n:", n)
//     if(n < 2){
//         n++;
//     }else{
//        n=0;
//     }//if
//     console.log("n:", n) 

//     $(".move li").eq(n).fadeIn();

// }//function move

//이미지 슬라이드 2
$(".move li:gt(0)").hide();
var current = 0;
setInterval(function(){
    if(current==2){
        current=0
    }else{
        current++
    }//if
    console.log("current:",current)
    $(".move li").eq(current).siblings().fadeOut()
    $(".move li").eq(current).fadeIn()

},2000)//setInterval

//pop
$(".p_click").click(function(){
    $(".pop").fadeIn()
})//p_click").click
$(".close").click(function(){
    $(".pop").fadeOut()
})//close").click



})//jquery