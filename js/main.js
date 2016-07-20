$(document).ready(function () {

    function setSectionHeight() {

        var height = $(window).height();
        var heroPadTop = $('.hero').css('padding-top');
        heroPadTop = parseInt(heroPadTop, 10);

        var headerHei = $('.header').css('height');
        headerHei = parseInt(headerHei, 10);

        $('.hero').height(height - headerHei - heroPadTop);
        $('.expertize').height(height);
        $('.home .case').height(height);
        $('.principle').height(height);

        var pageHeight = $('.wrapper').height();
        $('.tempor').height(pageHeight);

    }

    setSectionHeight();
    $(window).resize(setSectionHeight);


    $(".down-scroll").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
    /********************Modal***************************/
    $('.request').click(function () {

        $('#overlay')
            .css('display', 'block')
            .animate({
                opacity: 1
            }, {
                queue: false,
                duration: 100
            });
        $('#modal_form')
            .css('display', 'block')
            .animate({
                opacity: 1
            }, {
                queue: false,
                duration: 100
            })
            .addClass('open');

    });

    $('#modal_close').click(function () {
        $('#modal_form')
            .removeClass('open')
            .animate({
                opacity: 0
            }, {
                queue: false,
                duration: 100
            });
        $('#modal_form').addClass('hidden');
        $('#modal_form').removeClass('hidden');
        setTimeout(function () {
            $('#modal_form').css('display', 'none');
        }, 500);
        $('#overlay')
            .css('display', 'none')
            .animate({
                opacity: 0
            }, {
                queue: false,
                duration: 100
            });
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


    function test(number) {
        var slideIndex = number - 1;
        var $slickElement = $('.cases-slick');
        $slickElement.slick('slickGoTo', parseInt(slideIndex));
    }

    if (window.location.hash === '#1') {
        test(1);
    }
    if (window.location.hash === '#2') {
        test(2);
    }
    if (window.location.hash === '#3') {
        test(3);
    }
    if (window.location.hash === '#4') {
        test(4);
    }
    if (window.location.hash === '#5') {
        test(5);
    }
    if (window.location.hash === '#6') {
        test(6);
    }
    if (window.location.hash === '#7') {
        test(7);
    }
    if (window.location.hash === '#8') {
        test(8);
    }



    /******************Cases POPUP**************/
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


    function validateForm() {
        var validForm = false;

        var name = $('.input-name').val();
        var email = $('.email').val();
        var phone = $('.input-phone').val();
        var emptyName = (name == null || name == "");
        var emptyEmail = (email == null || email == "");
        var phoneEmail = (phone == null || phone == "");
        if (emptyName) {
            alert("Tell us your name, please");
        }
        if (emptyEmail && phoneEmail) {
            alert("At least email or phone must be filled out");
            if (emptyEmail) {
                $('.email').addClass('notvalid');
            };
            if (phoneEmail) {
                $('.input-phone').addClass('notvalid');
            };
        }

        if (!emptyEmail && !emptyName) {
            validForm = true;
        };
        if (!phoneEmail && !emptyName) {
            validForm = true;
        }
        return validForm;
        //        if (validForm) {
        //            modalSubmit();
        //        }

    };

    $('input').focus(function () {
        $(this).removeClass('notvalid');
        $(this).css('color', '#111');
        $(this).css('borderBottomColor', '#111');
    });

    $('#modal').submit(function (event) {
        event.preventDefault();
        var validForm = validateForm();
        if (validForm) {
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: $(this).serialize()
            }).done(function () {
                alert("Thanks for your trust!");
                location.reload();
            });
            return false;
        }

    });





});