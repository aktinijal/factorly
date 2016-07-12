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
//        if(width > 1920){
//            var margTop = 65;
//            var slickNextTop = 75;
//        } 
        $('.sliderBig.slick-prev').css({
            'top': slickImgOffset.top + $('.slickBig-img').height() + margTop + 35 + 'px'
        });
        $('.pagingInfoBlock.casesPaging.black').css({
            'top': slickImgOffset.top + $('.slickBig-img').height() + margTop + 25 + 'px'
        });

        $('.sliderBig.slick-next').css({
            'top': slickImgOffset.top + $('.slickBig-img').height() + margTop + slickNextTop + 'px'
        });
        
        
        
        var productOffset = $('.project').offset();
        var projectHei = $('.project').css('height');
         $('.cases-slick .slick-prev.red').css({
            'top': productOffset.top + projectHei + margTop + 35 + 'px'
        });
        $('.pagingInfoBlock.casesPagingRed').css({
            'top': productOffset.top + projectHei + margTop + 25 + 'px'
        });

        $('.cases-slick .slick-next.red').css({
            'top': productOffset.top + projectHei + margTop + slickNextTop + 'px'
        });
        
        
    }
    
    setArrows();
    $(window).resize(setArrows);
    
    
    function setCaseHei() {
        var slickTrackHei = $('.slick-track').height();
        $('.cases').height(slickTrackHei);
    }
    
    setCaseHei();
    $(window).resize(setCaseHei);

});