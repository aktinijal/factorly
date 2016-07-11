$(document).ready(function () {

//    function setArrow() {
//        var heroOffset = $('.hero-text').offset();
//        $('.arrow').css({
//            'top': heroOffset.top + $('.hero-text').height() + 25 + 'px'
//        });
//    }
//    setArrow();
//    $(window).resize(setArrow);

    
    
    $('.first-triangle').animate({
        top: 0
    }, 800);

    $('.second-triangle').animate({
        top: 250
    }, 800, function () {
        $('.phone').animate({
            top: 60
        }, 600);
        $('.phone-shadow').animate({
            top: 60
        }, 650);
        $('.phone-shadow2').animate({
            top: 60
        }, 700);
        $('.phone-shadow3').animate({
            top: 60
        }, 800);
        $('.phone-shadow4').animate({
            top: 60
        }, 900);
        $('.first-triangle').animate({
            top: -10
        }, 250);
        $('.second-triangle').animate({
            top: 260
        }, 250, function () {
            $('.first-triangle').animate({
                top: 0
            }, 150);
            $('.second-triangle').animate({
                top: 220
            }, 150);
            $('.watch').animate({
                top: 60
            }, 900);
            $('.watch2').animate({
                right: 50
            }, 1000);
            $('.watch3').animate({
                right: 50
            }, 1100, function () {
                $('.home').animate({
                    opacity: 1
                }, 600);
                $('.arrow').animate({
                    opacity: 1
                }, 600);
            });
        });
    });

    $(".down-scroll").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
});