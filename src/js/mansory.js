$(document).ready(function () {

    var $grid = $('.photo__greed').masonry({
        itemSelector: '.greed__item',
        percentPosition: true,
        columnWidth: '.greed__sizer'
    });

    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    });
});



