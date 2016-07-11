$(document).ready(function () {
    
    function setSectionHeight(){
        var height = $(window).height();
        var heroPadTop = $('.hero').css('padding-top');
        heroPadTop = parseInt(heroPadTop, 10);

        var headerHei = $('.header').css('height');
        headerHei = parseInt(headerHei, 10);
        
        $('.hero').height(height-headerHei-heroPadTop);
        $('.expertize').height(height);
        $('.case').height(height);
        $('.principle').height(height);
        
        var pageHeight = $('.wrapper').height();
        $('.tempor').height(pageHeight);
        
        
    }
    setSectionHeight();
    $(window).resize(setSectionHeight);
    
    
        
    
    
    var x = false;
    some = function () {
        $('.request').css({
            'background-color': '#fff'
        });
        $('.request').css({
            'color': '#111'
        });
        $('.request').css({
            'box-shadow': 'none'
        });
        $('.footer-bg2').animate({
            opacity: 1
        }, 700, function () {
            $('.request').css({
                'background-color': '#111'
            });
            $('.request').css({
                'color': '#fff'
            });
            $('.request').css({
                'box-shadow': '0px 30px 60px 0px rgba(17, 17, 17, 0.4)'
            });
            $('.footer-bg2').animate({
                opacity: 0
            }, 50, function () {
                $('.request').css({
                    'background-color': '#fff'
                });
                $('.request').css({
                    'color': '#111'
                });
                $('.request').css({
                    'box-shadow': 'none'
                });
                $('.footer-bg2').animate({
                    opacity: 1
                }, 300, function () {
                    $('.request').css({
                        'background-color': '#111'
                    });
                    $('.request').css({
                        'color': '#fff'
                    });
                    $('.request').css({
                        'box-shadow': '0px 30px 60px 0px rgba(17, 17, 17, 0.4)'
                    });
                    $('.footer-bg2').animate({
                        opacity: 0
                    }, 30, function () {
                        $('.request').css({
                            'background-color': '#fff'
                        });
                        $('.request').css({
                            'color': '#111'
                        });
                        $('.request').css({
                            'box-shadow': 'none'
                        });
                        $('.footer-bg2').animate({
                            opacity: 1
                        }, 100, function () {
                            $('.request').css({
                                'background-color': '#111'
                            });
                            $('.request').css({
                                'color': '#fff'
                            });
                            $('.request').css({
                                'box-shadow': '0px 30px 60px 0px rgba(17, 17, 17, 0.4)'
                            });
                            $('.footer-bg2').animate({
                                opacity: 0
                            }, 20, function () {
                                $('.request').css({
                                    'background-color': '#fff'
                                });
                                $('.request').css({
                                    'color': '#111'
                                });
                                $('.request').css({
                                    'box-shadow': 'none'
                                });
                                $('.footer-bg2').animate({
                                    opacity: 1
                                }, 10);
                            });
                        });
                    });
                });
            });
        });
    };
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var scrollBottom = $(window).scrollTop() - $('.home').height();
        if (scrollBottom >= -1000 && x == false) {
            some();
            x = true;
        }
        if (scrollBottom <= -1500) {
            x = false;
            $('.footer-bg2').animate({
                opacity: 0
            }, 10)
            $('.request').css({
                'background-color': '#111'
            });
            $('.request').css({
                'color': '#fff'
            });
            $('.request').css({
                'box-shadow': '0px 30px 60px 0px rgba(17, 17, 17, 0.4)'
            });
        }
    });




/********************Modal***************************/
    $('.request').click(function () {
        $('#overlay').fadeIn(400,
            function () {
                $('#modal_form')
                    .css('display', 'block')
                    .animate({
                        opacity: 1
                    }, 200);
            });
    });

    $('#modal_close, #overlay').click(function () {
        $('#modal_form')
            .animate({
                    opacity: 0
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });

/*******************Expertize**********************/
    var expertizeItemHeight = $(".app").height();
    $(".learn-div").height(expertizeItemHeight);
    $(".idea").height(expertizeItemHeight);
    $(window).resize(function () {
        var expertizeItemHeight = $(".app").height();
        $(".learn-div").height(expertizeItemHeight);
        $(".idea").height(expertizeItemHeight);
    });

/********************Slick************************/
    var $status = $('.pagingInfo');
    var $slickElement = $('.cases-slick');
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text("Case " + i + ' of ' + slick.slideCount);
    });
    $slickElement.slick({});
    
    
    
    var $status = $('.pagingInfo');
    var $slickElementHome = $('.cases-slickHome');
    $slickElementHome.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text("Case " + i + ' of ' + slick.slideCount);
    });
    $slickElementHome.slick({});
    
//    $('').onclick( function () {
//        console.log('uih');
//        var slideIndex = 3;
//        $slickElement.slick('slickGoTo', parseInt(slideIndex));
////        e.preventDefault();
//    });

    $(document).ready(function () {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    });

/***********************ABOUT.html******************/

    $('.zoom-face').hover(function () {
        $(this).find('.text > p').animate({
            opacity: '1'
        }, 300);
        $(this).find('.face > img').animate({
            width: '105%',
            left: '-2.5%'

        }, 300);
    });
    $('.zoom-face').mouseleave(function () {
        $(this).find('.text > p').animate({
            opacity: '0'
        }, 300);
        $(this).find('.face > img').animate({
            width: '100%',
            //                left: -0

        }, 100);
    });


    $(function () {
        $('#datetimepicker1').datetimepicker({
            language: 'pt-BR'
        });
    });



});