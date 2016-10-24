$(function() {
    // $('.app-footer a').on('click',fucntion(){
    //   $('.app-footer a').removeClass('active');
    //   $(this).addClass('active');
    // });

    $(".app-footer a").each(function() {
        var path = document.location.pathname.split('/');
        var page = path[path.length - 1];
        var href = $(this).attr("href");
        if (href === page) {
          console.log('aa111');
            $(this).addClass("active");
            return false;
        }
    });
});
