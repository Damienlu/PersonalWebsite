/*--------------------loading、animation after loaded--------------------*/

$( window ).load(function() {
    $('.loading-block').fadeOut(1000);
    $('.loading-page').delay(1000).fadeOut(1000);

    $('.maskfadein').addClass('anim-maskfadein');
    $('.titlefadein').addClass('anim-titlefadein');
});


/*--------------------底邊界定位--------------------*/
$(document).ready(function() {
    var runHeight = function () {

        var _VPS = $(window).height();
        var half = _VPS / 2;

        if (_VPS >= 0 && _VPS < 365) {
            $('.image__page').css({'height': '365px'});
            $('.mobile__image__page').css({'height': '365px'});
            $('.work__page').css({'height': '183px'});
            $('.mobile__work__page').css({'height': '183px'});
            $('.work__page').css({'height': '183px'});
            $('.mobile__work__page').css({'height': '183px'});
        } else if (_VPS > 365 && _VPS < 2160) {
            $('.image__page').css({'height': _VPS + 'px'});
            $('.mobile__image__page').css({'height': _VPS + 'px'});
            $('.work__page').css({'height': half + 'px'});
            $('.mobile__work__page').css({'height': half + 'px'});
            $('.contact__page').css({'height': half + 'px'});
            $('.mobile__contact__page').css({'height': half + 'px'});
        } else {
            $('.image__page').css({'height': '2160px'});
            $('.mobile__image__page').css({'height': '2160px'});
            $('.work__page').css({'height': '1080px'});
            $('.mobile__work__page').css({'height': '1080px'});
            $('.contact__page').css({'height': '2160px'});
            $('.mobile__contact__page').css({'height': '1080px'});
        }
    };

    /*--------------------首頁大圖.work.contact圖Parallax effect--------------------*/

    var imageParallax = function () {

        var _NOW = $(window).scrollTop();
        var _SMW = $(window).width();
        var aa = 1 - (_NOW / 700);
        var ab = 60 + (_NOW / 40);

        if (_SMW > 660) {
            $('.mobile__image__page').removeClass('mobile__image__page').addClass('image__page');
            $('.mobile__work__page').removeClass('mobile__work__page').addClass('work__page');
            $('.mobile__contact__page').removeClass('mobile__contact__page').addClass('contact__page');

            $('.image__page').css('background-position', 'center calc(50% + ' + (_NOW * 0.3) + 'px)');
            $('.work__page').css('background-position', 'center calc(100% + ' + (_NOW * 0.3) + 'px)');
            $('.contact__page').css('background-position', 'center calc(180% + ' + (_NOW * 0.3) + 'px)');
        } else {
            $('.image__page').css('background-position', 'center 0%');
            $('.work__page').css('background-position', 'center 0%');
            $('.contact__page').css('background-position', 'center 0%');

            $('.image__page').removeClass('image__page').addClass('mobile__image__page');
            $('.work__page').removeClass('work__page').addClass('mobile__work__page');
            $('.contact__page').removeClass('contact__page').addClass('mobile__contact__page');
        }

        if (_SMW > 768) {
            $('.image-title').css({'opacity': aa, 'padding-top': ab + 'vh'});
        } else {
            $('.image-title').css({'opacity': '1', 'padding-top': '57vh'});
        }
    };

    runHeight();
    imageParallax();

    window.onscroll = function () {
        imageParallax();
    };
    window.onresize = function () {
        runHeight();
        imageParallax();
    };
});
/*--------------------scrollto應用--------------------*/

$(document).ready(function(){

    $('a').on('click', gogo);

    function gogo() {
        $('a').off('click');
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){
                window.location.hash = hash;
            });
        }
        $('a').on('click', gogo);

        /*--------------------nav active應用--------------------*/

        $(this).parent().addClass('active').siblings('.active').removeClass('active');
    };

    /*--------------------TOP smooth scroll--------------------*/
    $('.up').on('click',function() {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500
        );
    });
    /*--------------------portfolio展開--------------------*/
    $('#view-area').click(function (evt) {
        evt.preventDefault();
        $('.skill-hide').slideToggle(600);
        // $(this).
    });

});

