$(document).ready(function () {

    $(".list__item").click(function (event) {

        let img = event.target.firstElementChild;
        let arrow = event.target.children[1];
        let text = event.target.lastElementChild;

        $(".description__img").attr("src", ($(img).attr("src")));
        $(".description__text").text($(text).text());
        $(".list__item").css({"background-color": "#f5f9fb", "color": "#717171"});
        $(".list__item--arrow").css({"visibility": "hidden"});
        $(this).css({"background-color": "#18cfab", "color": "#ffffff"});
        $(arrow).css({"visibility": "visible"});
    });


    $("#first-item, #third-item").mouseenter(function () {

        $(".capabilities__item").css({"background-color": "#1c2a33", "border-top-color": "#18cfab"});
        $(".svg__color").css("fill", "#18cfab");
        $(".capabilities__explain").css("color", "#18cfab");

    }).mouseleave(function () {
        $(".capabilities__item").css({"background-color": "#18cfab", "border-top-color": "#ffffff"});
        $("#first-item, #third-item")
            .css({"background-color": "#1c2a33", "color": "#18cfab", "border-top-color": "#18cfab"});
        $("#first-svg, #third-svg")
            .css("fill", "#18cfab");
        $("#first-explain, #third-explain")
            .css("color", "#18cfab");
        $("#second-svg, #second-svg")
            .css("fill", "white");
        $("#second-explain, #fourth-explain")
            .css("color", "#ffffff");
    });


    $("#second-item, #fourth-item").mouseenter(function () {
        $(".capabilities__item").css({"background-color": "#18cfab", "border-top-color": "#ffffff"});
        $(".svg__color").css("fill", "#ffffff");
        $(".capabilities__explain").css("color", "#ffffff");

    }).mouseleave(function () {
        $(".capabilities__item").css({"background-color": "#18cfab", "border-top-color": "#ffffff"});
        $("#first-item, #third-item")
            .css({"background-color": "#1c2a33", "color": "#18cfab", "border-top-color": "#18cfab"});
        $("#first-svg, #third-svg")
            .css("fill", "#18cfab");
        $("#first-explain, #third-explain")
            .css("color", "#18cfab");
        $("#second-svg, #fourth-svg")
            .css("fill", "white");
        $("#second-explain, #fourth-explain")
            .css("color", "#ffffff");
    });


});


