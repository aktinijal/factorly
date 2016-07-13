$(document).ready(function () {

    function setArrows() {
        var slickImgOffset = $('.slickBig-img').offset();
        $('.sliderBig.slick-prev , .cases-slick .slick-prev.red').css({
            'left': slickImgOffset.left + $('.slickBig-img').width() - 100 + 'px'
        });
        
        $('.sliderBig.slick-next , .cases-slick .slick-next.red').css({
            'left': slickImgOffset.left + $('.slickBig-img').width() - 75 + 'px'
        });
        $('.pagingInfoBlock.casesPaging').css({
            'left': slickImgOffset.left + $('.slickBig-img').width() - 325 + 'px'
        });
        
        
        var width = $(window).width();
        var margTop = 65;
        var slickNextTop = 75;
        if(width <= 1920){
            var margTop = 0;
            var slickNextTop = 60;
        } 
        if(width > 1920){
            var margTop = 65;
            var slickNextTop = 75;
        } 
        $('.sliderBig.slick-prev').css({
            'top': slickImgOffset.top + $('.slickBig-img').height() + margTop + 35 + 'px'
        });
        $('.pagingInfoBlock.casesPaging.black').css({
            'top': slickImgOffset.top + $('.slickBig-img').height() + margTop + 25 + 'px'
        });

        $('.sliderBig.slick-next').css({
            'top': slickImgOffset.top + $('.slickBig-img').height() + margTop + slickNextTop + 'px'
        });
        
        
        var quoteOffset = $('.quote').offset();
        var quoteHei = $('.quote').css('height');
        quoteHei = parseInt(quoteHei, 10);
         $('.cases-slick .slick-prev.red').css({
            'top': quoteOffset.top + quoteHei + margTop + 35 + 'px'
        });
        $('.pagingInfoBlock.casesPagingRed').css({
            'top': quoteOffset.top + quoteHei + margTop + 25 + 'px'
        });

        $('.cases-slick .slick-next.red').css({
            'top': quoteOffset.top + quoteHei + margTop + slickNextTop + 'px'
        });
    }

    setArrows();
    $(window).resize(setArrows);
    
    
    function setCaseHei() {
        var slickTrackHei = $('.case4').height();
        $('.case1 ,  .case2, .case3, .case5, .case6, .case7, .case8').height(slickTrackHei);
    }
    
    setCaseHei();
    $(window).resize(setCaseHei);
    
//    setCaseHei();
////    var self = this;
//    $(window).resize(setTimeout(function(){
//        setCaseHei();
//        
//    }, 500));

});