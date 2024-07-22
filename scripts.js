$(document).ready(function(){
    $('.menu-icon').on('click', function(){
        $('.nav-links').toggleClass('active');
    });

    $('nav ul li a').on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var offset = $('header').outerHeight();
        $('html, body').animate({
            scrollTop: $(target).offset().top - offset
        }, 1000);
        $('.nav-links').removeClass('active');
    });
});
