$(document).ready(function () {


    $("#search").click(function () {
        $(".pages").css({"width": "75%"});
        $("#search-text").toggle();
        let visibility = $("#search-text").css("display");
        if (visibility === 'none') {
            $(".pages").css({"width": "60%"});
        }
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".pages").length) {
            $('#search-text').hide();
            $(".pages").css({"width": "60%"});
           }
        e.stopPropagation();
    });




    $("#search-text").keydown(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            $(".pages").css({"width": "60%"});
            $("#search-text").css({"display": "none"});
            let textValue = $("#search-item").val();
            let key = '9342853-8c19e5cbc2492848be3ea2f52';
            let url = 'https://pixabay.com/api/?key=' + key + '&q=' + textValue + '&per_page=100&image_type=photo&lang=ru&lang=en';
            $.get(url, function (data) {
                console.log(url);
                let images = data.hits;
                if (images.length == 0) {
                    $(".sorry").show();
                } else {
                    $(".sorry").hide();
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
            $("#search-item").val("");

    return false;

}
})
;


})
;