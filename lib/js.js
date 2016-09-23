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

        if (_SMW > 720) {
            $('.mobile__image__page').removeClass('mobile__image__page').addClass('image__page');
            $('.mobile__work__page').removeClass('mobile__work__page').addClass('work__page');
            $('.mobile__contact__page').removeClass('mobile__contact__page').addClass('contact__page');

            if ($('.skill-hide').is(':hidden')) {
                $('.image__page').css('background-position', 'center calc(50% + ' + (_NOW * 0.5) + 'px)');
                $('.work__page').css('background-position', 'center calc(120% + ' + (_NOW * 0.5) + 'px)');
                $('.contact__page').css('background-position', 'center calc(170% + ' + (_NOW * 0.5) + 'px)');
            } else {
                $('.image__page').css('background-position', 'center calc(50% + ' + (_NOW * 0.5) + 'px)');
                $('.work__page').css('background-position', 'center calc(220% + ' + (_NOW * 0.5) + 'px)');
                $('.contact__page').css('background-position', 'center calc(290% + ' + (_NOW * 0.5) + 'px)');
            }
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
        checkHashLoc();
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


/*--------------------scrollto應用--------------------*/


    $('a').on('click', gogo);

    function gogo() {
        $('a').off('click');
        if (this.hash !== "") {
            event.preventDefault();
            var hash2 = this.hash;

            $('html, body').animate({
                scrollTop: $(hash2).offset().top
            }, 500, function(){
                window.location.hash = hash2;
            });
        }
        $('a').on('click', gogo);
    };

    /*--------------------TOP smooth scroll--------------------*/

    $('.up').on('click',function() {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500
        );
    });

    /*--------------------portfolio展開--------------------*/

    $('.more-click').click(function (evt) {
        evt.preventDefault();
        if ($('.skill-hide').is(':hidden')) {
            $('.skill-anim').fadeIn(600);
            $('.skill-hide').slideDown(600);
            $('.back_to_more').fadeIn(600);
            $('.main-portfolio-skill .skill_content ul')
                .delay(400)
                .queue(function (next) {
                    $(this).css({'opacity': '1'});
                    next()
                });
            $('.changetext').fadeOut(1000, function(){
                $(this).children('a').text('CLOSE');
            }).fadeIn(1000);
        } else {
            $('.skill-anim').fadeOut(1000);
            $('.main-portfolio-skill .skill_content ul').css({'opacity': '0.2'});
            $('.skill-hide').slideUp(600);
            $('.back_to_more').fadeOut(600);
            $('.changetext').fadeOut(1000, function(){
                $(this).children('a').text('VIEW MORE');
            }).fadeIn(1000);
        }
    });
});

/*--------------------hash location 定位--------------------*/

var checkHashLoc = function(){
    var _home = Math.round( $('#home').offset().top) ;
    var _about = Math.round( $('#about').offset().top);
    var _work = Math.round( $('#work').offset().top);
    var _contact = Math.round( $('#contact').offset().top);
    var now = $(window).scrollTop();
    // console.log('1:'+_home+',2:'+_about+',3:'+_work+',4:'+_contact);


        if( now >= 0 && now < _about){
            history.pushState(null, null, '#home');
            window.location.hash = "#home";
            $('#parallax-nav ul li a').eq(0).parent('li').siblings('li').children('a').css({'width':'12px','height':'12px', 'background-color':'#d05a6e', 'border':'inherit'});
            $('#parallax-nav ul li a').eq(0).css({'width':'8px','height':'8px', 'background-color':'transparent', 'border': 'solid 2px #d05a6e'});
        }else if( now >= _about && now < _work ){
            history.pushState(null, null, '#about');
            window.location.hash = "#about";
            $('#parallax-nav ul li a').eq(1).parent('li').siblings('li').children('a').css({'width':'12px','height':'12px', 'background-color':'#d05a6e', 'border':'inherit'});
            $('#parallax-nav ul li a').eq(1).css({'width':'8px','height':'8px', 'background-color':'transparent', 'border': 'solid 2px #d05a6e'});
        }else if( now >= _work && now < _contact ){
            history.pushState(null, null, '#work');
            window.location.hash = "#work";
            $('#parallax-nav ul li a').eq(2).parent('li').siblings('li').children('a').css({'width':'12px','height':'12px', 'background-color':'#d05a6e', 'border':'inherit'});
            $('#parallax-nav ul li a').eq(2).css({'width':'8px','height':'8px', 'background-color':'transparent', 'border': 'solid 2px #d05a6e'});
                    }else{
            history.pushState(null, null, '#contact');
            window.location.hash = "#contact";
            $('#parallax-nav ul li a').eq(3).parent('li').siblings('li').children('a').css({'width':'12px','height':'12px', 'background-color':'#d05a6e', 'border':'inherit'});
            $('#parallax-nav ul li a').eq(3).css({'width':'8px','height':'8px', 'background-color':'transparent', 'border': 'solid 2px #d05a6e'});
                    }
    // console.log('now:'+now+':'+ window.location.hash);
};

