$(document).ready(function() {
    $("li").hover(changeStyle);

    function changeStyle() {
    	$(this).toggleClass("clicked");
    }
});