$(document).ready(function () {
    function setContactPadding() {
        var homeHeight = $('#home').height();
        homeHeight *= 0.10;
        $('.contacts').css({
            'padding-top': homeHeight + 'px'
        });
    }
    setContactPadding();
    $(window).resize(setContactPadding);

    /******************Clock************/
    //    (function () {
    //        // Initialise the locale-enabled clocks
    //            initInternationalClocks();
    //        // Initialise any local time clocks
    initLocalClocks();
    //        // Start the seconds container moving
    moveSecondHands();
    //        // Set the intial minute hand container transition, and then each subsequent step
    setUpMinuteHands();
    //    })();
    function getTimes() {
        moment.tz.add([
    '1 EU CE%sT',
    'Eire|GMT IST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00'
    ]);
        var now = new Date();
        // Set the time manually for each of the clock types we're using
        var times = [{
                jsclass: 'js-tokyo',
                jstime: moment.tz(now, "Europe/Paris")
    },
            {
                jsclass: 'js-london',
                jstime: moment.tz(now, "Eire")
    }
  ];
        return times;
    }


    function initLocalClocks() {
        var times = getTimes();
        // Get the local time using JS
        //        var date = new Date;
        //        var seconds = date.getSeconds();
        //        var minutes = date.getMinutes();
        //        var hours = date.getHours();
//        alert(times[1].jstime);
        var hours = times[1].jstime.format('h');
        var minutes = times[1].jstime.format('mm');
        var seconds = times[1].jstime.format('ss');


        // Create an object with each hand and it's angle in degrees
        var hands = [
            {
                hand: 'hours',
                angle: (hours * 30) + (minutes / 2)
    },
            {
                hand: 'minutes',
                angle: (minutes * 6)
    },
            {
                hand: 'seconds',
                angle: (seconds * 6)
    }
  ];
        // Loop through each of these hands to set their angle
        for (var j = 0; j < hands.length; j++) {
            var elements = document.querySelectorAll('.' + hands[j].hand);
            for (var k = 0; k < elements.length; k++) {
                elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
                elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
                // If this is a minute hand, note the seconds position (to calculate minute position later)
                if (hands[j].hand === 'minutes') {
                    elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
                }
            }
        }


        var ampmDiv = document.getElementById('ampm'),
            ampm = (hours >= 12) ? "PM" : "AM";
        ampmDiv.innerHTML = ampm;

    };



    /* Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that*/
    function setUpMinuteHands() {
        // More tricky, this needs to move the minute hand when the second hand hits zero
        var containers = document.querySelectorAll('.minutes-container');
        var secondAngle = containers[containers.length - 1].getAttribute('data-second-angle');
        console.log(secondAngle);
        if (secondAngle > 0) {
            // Set a timeout until the end of the current minute, to move the hand
            var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
            console.log(delay);
            setTimeout(function () {
                moveMinuteHands(containers);
            }, delay);
        }
    }


    /*Do the first minute's rotation*/
    function moveMinuteHands(containers) {
        for (var i = 0; i < containers.length; i++) {
            containers[i].style.webkitTransform = 'rotateZ(6deg)';
            containers[i].style.transform = 'rotateZ(6deg)';
        }
        // Then continue with a 60 second interval
        setInterval(function () {
            for (var i = 0; i < containers.length; i++) {
                if (containers[i].angle === undefined) {
                    containers[i].angle = 12;
                } else {
                    containers[i].angle += 6;
                }
                containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + 'deg)';
                containers[i].style.transform = 'rotateZ(' + containers[i].angle + 'deg)';
            }
        }, 60000);
    }

    /*Move the second containers*/
    function moveSecondHands() {
        var containers = document.querySelectorAll('.bounce .seconds-container');
        setInterval(function () {
            for (var i = 0; i < containers.length; i++) {
                if (containers[i].angle === undefined) {
                    containers[i].angle = 6;
                } else {
                    containers[i].angle += 6;
                }
                containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + 'deg)';
                containers[i].style.transform = 'rotateZ(' + containers[i].angle + 'deg)';
            }
        }, 1000);
        for (var i = 0; i < containers.length; i++) {
            // Add in a little delay to make them feel more natural
            var randomOffset = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
            containers[i].style.transitionDelay = '0.0' + randomOffset + 's';
        }
    }






});