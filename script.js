    //首页滑动效果的js和插件
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 30
    });

var mySwiper = new Swiper('.swiper-container', {
    autoplay:true,//等同于以下设置
    autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
});
    
