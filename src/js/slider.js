$(document).ready(function () {

    $("#first-user").addClass("active");

    function slide(target) {
        $(".users__photo").removeClass("active").eq(target).addClass("active");
        $(".list__content").animate({
            'right': +1160 * target + 'px'
        });
    }

    $(".users__photo").click(function () {
        var target = $(this).index();
        slide(target);
        clearInterval(timer);
        $('.right').trigger('click');
    });

    $(".right").click(function () {
        var target = $(".users__photo.active").index();
        if (target === $(".users__photo").length - 1) {
            target = -1;
        }
        target = target + 1;
        slide(target);
        clearInterval(timer);
        $('.right').trigger('click');
    });

    $(".left").click(function () {
        var target = $(".users__photo.active").index();
        if (target === 0) {
            target = $(".users__photo li").length;
        }
        target = target - 1;
        slide(target);
        clearInterval(timer);
        $('.right').trigger('click');
    });

});

