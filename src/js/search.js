$(document).ready(function () {

    $(".header__sorry").hide();

    $(".header__menu__items__links li:last-child").click(function () {
        $(".header__menu__items__links").css({"width": "75%"});
        $(".header__menu__items__links li:nth-child(10)").css({"display": "block"});
    });


    $(".header__menu__items__links li:nth-child(10)").keydown(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            $(".header__menu__items__links").css({"width": "60%"});
            $(".header__menu__items__links li:nth-child(10)").css({"display": "none"});
            let textValue = $(".header__menu__items__links li:nth-child(10) input").val();
            let key = '9342853-8c19e5cbc2492848be3ea2f52';
            let url = 'https://pixabay.com/api/?key=' + key + '&q=' + textValue + '&per_page=100&image_type=photo&lang=ru&lang=en&editors_choice=true';
            $.get(url, function (data) {
                let images = data.hits;
                if (images.length == 0) {
                    $(".header__sorry").show();
                } else {
                    $(".header__sorry").hide();
                    for (let i = 0, child = 1; i <= images.length - 1; i++, child++) {
                        let src = images[i].largeImageURL;
                        let selector = '.photo__greed__item:nth-child(' + [child] + ') img';
                        $(`${selector}`).attr("src", src);
                    }

                    var $grid = $('.photo__greed').masonry({
                        itemSelector: '.photo__greed__item',
                        percentPosition: true,
                        columnWidth: '.photo__greed__sizer'
                    });

                    $grid.imagesLoaded().progress(function () {
                        $grid.masonry();
                    });
                }
            });
            $(".header__menu__items__links li:nth-child(10) input").val("");

    return false;

}
})
;


})
;