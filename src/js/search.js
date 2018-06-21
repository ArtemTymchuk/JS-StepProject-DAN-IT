$(document).ready(function () {

    $(".header__sorry").hide();




    $(".header__items ul li:last-child").click(function () {
        $(".header__items ul").css({"width": "75%"});
        $(".header__items ul li:nth-child(10)").toggle()
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".header__items ul").length) {
            $('.header__items ul li:nth-child(10)').hide();
            $(".header__items ul").css({"width": "60%"});
        }
        e.stopPropagation();
    });




    $(".header__items ul li:nth-child(10)").keydown(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            $(".header__items ul").css({"width": "60%"});
            $(".header__items ul li:nth-child(10)").css({"display": "none"});
            let textValue = $(".header__items ul li:nth-child(10) input").val();
            let key = '9342853-8c19e5cbc2492848be3ea2f52';
            let url = 'https://pixabay.com/api/?key=' + key + '&q=' + textValue + '&per_page=100&image_type=photo&lang=ru&lang=en';
            $.get(url, function (data) {
                console.log(url);
                let images = data.hits;
                if (images.length == 0) {
                    $(".header__sorry").show();
                } else {
                    $(".header__sorry").hide();
                    for (let i = 0, child = 1; i <= images.length - 1; i++, child++) {
                        let src = images[i].largeImageURL;
                        let selector = '.greed__item:nth-child(' + [child] + ') img';
                        $(`${selector}`).attr("src", src);
                    }

                    var $grid = $('.photo__greed').masonry({
                        itemSelector: '.greed__item',
                        percentPosition: true,
                        columnWidth: '.greed__sizer'
                    });

                    $grid.imagesLoaded().progress(function () {
                        $grid.masonry();
                    });

                    $("html, body").animate({scrollTop: $(".header").height()+ 3414 },3000);



                }
            });
            $(".header__items ul li:nth-child(10) input").val("");

    return false;

}
})
;


})
;