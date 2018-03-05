$(function () {
    $(".item-title-li").click(function(){
        var index=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
       $(".item-bank-content-right-session").eq(index).css({display:"block"}).siblings().css({display:"none"})
    })
})