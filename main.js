$(function() {
    var marquee = $("#slide_line");
    marquee.wrapInner("<span>");
    marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" });
    marquee.append(marquee.find("span").clone());
    marquee.wrapInner("<div>");
    marquee.find("div").css("width", "200%");
    var reset = function() {
        if ($(window).width() <= '800'){
            $(this).stop();
        } else {
            $(this).css("margin-left", "0%");
            $(this).animate({ "margin-left": "-100%" }, 15000, 'linear', reset);
        }
    };
    reset.call(marquee.find("div"));
});