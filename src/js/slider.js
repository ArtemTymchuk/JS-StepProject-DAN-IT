$(document).ready(function () {

    $(".users__links li:first-child").addClass("active");

    function slide(target) {
        $(".users__links li").removeClass("active").eq(target).addClass("active");
        $(".comments__slider ul li").animate({
            'right': +1160 * target + 'px'
        });
    }

    $(".users__links li").click(function () {
        var target = $(this).index();
        slide(target);
        clearInterval(timer);
        $('.right').trigger('click');
    });

    $(".right").click(function () {
        var target = $(".users__links li.active").index();
        if (target === $(".users__links li").length - 1) {
            target = -1;
        }
        target = target + 1;
        slide(target);
        clearInterval(timer);
        $('.right').trigger('click');
    });

    $(".left").click(function () {
        var target = $(".users__links li.active").index();
        if (target === 0) {
            target = $(".users__links li").length;
        }
        target = target - 1;
        slide(target);
        clearInterval(timer);
        $('.right').trigger('click');
    });

});

