$(function(){
    //banner轮播
    var mySwiper = new Swiper('.swiper-container',{
        loop:false,
        paginationClickable: true,
        speed: 2000,
        loop: true,
        observer:true,
        observeParents:true,
        autoplayDisableOnInteraction : false,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    //公告
    {
        var st=setInterval(fn,300);
        var num=0;
        var mount=($(".anoun-content").width())/1;
        function fn(){
            num++;
            if(num==160){
                num=0;
            }
            $(".anoun-content").css({marginLeft:`${-1*num}vw`});
        }

    }
})
