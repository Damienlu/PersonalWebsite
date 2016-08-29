
/*--------------------loading--------------------*/

$(window).load(function() {
    $('.loading-block').fadeOut(1000);
    $('.loading-page').addClass('load-hide').delay(1000).fadeOut(1000);
});


/*--------------------底邊界定位--------------------*/

var runHeight = function () {

    var _VPS = $(window).height();
//        console.log(_VPS);

    if (_VPS >= 0 && _VPS < 365) {
        $('.image__page').css({'height': '365px'});
    } else if (_VPS > 365 && _VPS < 2160) {
        $('.image__page').css({'height': _VPS + 'px'});
    } else {
        $('.image__page').css({'height': '2160px'});
    }
};

runHeight();
window.onresize = function () {
    runHeight()
};


/*--------------------首頁大圖.work.contact圖Parallax effect--------------------*/

var imageParallax = function () {

    var _NOW = $(window).scrollTop();
    var _SMW = $(window).width();
    var aa = 1 - (_NOW / 400);
    var ab = 60 + (_NOW / 40);
    var ac = 60 + (_NOW / 40);
    // console.log(now);
    if (_SMW > 660 ) {
        $('.image__page').css('background-position', 'center calc(50% + ' + (_NOW * 0.3) + 'px)');
        $('.work__page').css('background-position', 'center calc(50% + ' + (_NOW * 0.3) + 'px)');
        $('.contact__page').css('background-position', 'center calc(130% + ' + (_NOW * 0.3) + 'px)');
    } else {
        $('.image__page').css('background-position', 'center calc(50% + ' + _NOW  + 'px)');
        $('.work__page').css('background-position', 'center calc(160% + ' + _NOW  + 'px)');
        $('.contact__page').css('background-position', 'center calc(350% + ' + _NOW  + 'px)');
    }

    if(_SMW > 768) {
        $('.image-title').css({'opacity': aa, 'padding-top': ab + 'vh'});
    } else {
        $('.image-title').css({'opacity': '1', 'padding-top': '50vh'});
    }
};

imageParallax();
window.onscroll = function () {
    imageParallax()
};