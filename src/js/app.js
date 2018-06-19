$(document).ready(function () {

    $(".services__examples__links li").click(function (event) {
        console.log(event.target);
        let li = event.target;
        let img = event.target.firstElementChild;
        let arrow = event.target.children[1];
        console.log(arrow);
        let text = event.target.lastElementChild;
        $(".services__examples__description img").attr("src", ($(img).attr("src")));
        $(".services__examples__description p").text($(text).text());
        $(".services__examples__links li").css({"background-color": "#f5f9fb", "color": "#717171"});
        $(".services__examples__links li span").css({"visibility": "hidden"});
        $(li).css({"background-color": "#18cfab", "color": "#ffffff"});
        $(arrow).css({"visibility": "visible"});
    });


    $(".capabilities div:first-child, .capabilities div:nth-child(3)").mouseenter(function (event) {

        $(".capabilities div").css({"background-color": "#1c2a33", "border-top-color": "#18cfab"});
        $(".capabilities div svg path").css("fill", "#18cfab");
        $(".capabilities div p").css("color", "#18cfab");

    }).mouseleave(function () {
        $(".capabilities div").css({"background-color": "#18cfab", "border-top-color": "#ffffff"});
        $(".capabilities div:first-child, .capabilities div:nth-child(3)")
            .css({"background-color": "#1c2a33", "color": "#18cfab", "border-top-color": "#18cfab"});
        $(".capabilities div:first-child svg path, .capabilities div:nth-child(3) svg path")
            .css("fill", "#18cfab");
        $(".capabilities div:first-child p, .capabilities div:nth-child(3) p")
            .css("color", "#18cfab");
        $(".capabilities div:nth-child(2) svg path, .capabilities div:last-child svg path")
            .css("fill", "white");
        $(".capabilities div:nth-child(2) p, .capabilities div:last-child p")
            .css("color", "#ffffff");
    });


    $(".capabilities div:nth-child(2), .capabilities div:last-child").mouseenter(function () {
        $(".capabilities div").css({"background-color": "#18cfab", "border-top-color": "#ffffff"});
        $(".capabilities div svg path").css("fill", "#ffffff");
        $(".capabilities div p").css("color", "#ffffff");

    }).mouseleave(function () {
        $(".capabilities div").css({"background-color": "#18cfab", "border-top-color": "#ffffff"});
        $(".capabilities div:first-child, .capabilities div:nth-child(3)")
            .css({"background-color": "#1c2a33", "color": "#18cfab", "border-top-color": "#18cfab"});
        $(".capabilities div:first-child svg path, .capabilities div:nth-child(3) svg path")
            .css("fill", "#18cfab");
        $(".capabilities div:first-child p, .capabilities div:nth-child(3) p")
            .css("color", "#18cfab");
        $(".capabilities div:nth-child(2) svg path, .capabilities div:last-child svg path")
            .css("fill", "white");
        $(".capabilities div:nth-child(2) p, .capabilities div:last-child p")
            .css("color", "#ffffff");
    });


});


