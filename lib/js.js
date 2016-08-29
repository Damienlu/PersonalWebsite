
/*--------------------loading--------------------*/

$(window).load(function() {
    $('.loading-block').fadeOut(1000);
    $('.loading-page').addClass('load-hide').delay(1000).fadeOut(1000);
});


/*--------------------底邊界定位--------------------*/

var runHeight = function () {

    var _VPS = $(window).height();
       console.log(_VPS);

    if (_VPS >= 0 && _VPS < 365) {
        $('.image__page').css({'height': '365px'});
        $('.mobile__image__page').css({'height': '365px'});
    } else if (_VPS > 365 && _VPS < 2160) {
        $('.image__page').css({'height': _VPS + 'px'});
        $('.mobile__image__page').css({'height': _VPS + 'px'});
    } else {
        $('.image__page').css({'height': '2160px'});
        $('.mobile__image__page').css({'height': '2160px'});
    }
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
        $('.mobile__image__page').removeClass('mobile__image__page');
        $('.add__image').addClass('image__page');
        $('.mobile__work__page').removeClass('mobile__work__page');
        $('.add__work').addClass('work__page');
        $('.mobile__contact__page').removeClass('mobile__contact__page');
        $('.add__contact').addClass('contact__page');

        $('.image__page').css('background-position', 'center calc(50% + ' + (_NOW * 0.3) + 'px)');
        $('.work__page').css('background-position', 'center calc(50% + ' + (_NOW * 0.3) + 'px)');
        $('.contact__page').css('background-position', 'center calc(130% + ' + (_NOW * 0.3) + 'px)');
    } else {
        $('.image__page').removeClass('image__page');
        $('.add__image').addClass('mobile__image__page');
        $('.work__page').removeClass('work__page');
        $('.add__work').addClass('mobile__work__page');
        $('.contact__page').removeClass('contact__page');
        $('.add__contact').addClass('mobile__contact__page');
    }

    if(_SMW > 768) {
        $('.image-title').css({'opacity': aa, 'padding-top': ab + 'vh'});
    } else {
        $('.image-title').css({'opacity': '1', 'padding-top': '40vh'});
    }
};

runHeight();
imageParallax();

window.onscroll = function () {
    imageParallax()
};
window.onresize = function () {
    runHeight()
    imageParallax()
};