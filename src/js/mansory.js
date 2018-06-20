$(document).ready(function () {

    var $grid = $('.photo__greed').masonry({
        itemSelector: '.photo__greed__item',
        percentPosition: true,
        columnWidth: '.photo__greed__sizer'
    });

    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    });
});



