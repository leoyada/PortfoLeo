/*jslint browser: true*/
/*global $, jQuery, alert*/

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();


$(window).scroll(function (event) {
    didScroll = true;
});

function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) {
        return;
    }
    
    if (st > lastScrollTop && st > navbarHeight) {
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#overskrift2');
    var offset = startchange.offset();
    $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('.navbar').css({'background-color': 'rgba(248, 248, 255, 0.9)','border-bottom': '1pt solid lightgrey'});
        } else {
            $('.navbar').css({'background-color': 'transparent','border-bottom': 'none'});
        }
    });
}); 