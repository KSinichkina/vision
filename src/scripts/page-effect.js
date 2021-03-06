function scrollFooter(scrollY, heightFooter) {
    if(scrollY >= heightFooter) {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

function settingHeights () {
    const windowHeight        = $(window).height(),
    footerHeight        = $('footer').height(),
    heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    window.onscroll = function() {
        const scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });

        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
    }
}

$(window).load(function(){
    window.onresize = resize;
    settingHeights();

    function resize() {
        settingHeights();
    }

    $('.navigation-item.portfolio')[0].onclick = function(event){
        event.preventDefault();
        const headerHeight = $('header').height();
        window.scrollTo(0, headerHeight);
    }

    if (window.location.href.includes('#portfolio')) {
        const headerHeight = $('header').height();
        window.scrollTo(0, headerHeight);
    }
});