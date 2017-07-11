
$(function () {

    var focused = true;
    var baseTitle = window.window.document.title;


    $(window).focus(function() {
        focused = true;
        setTimeout(function() {
            document.title = baseTitle;
        }, 100);
    });

    $(window).blur(function() {
        focused = false;
        setTimeout(function() {
            document.title = 'Не забудь обо мне';
        }, 100);
    });


    $(".inline").modaal();


});



