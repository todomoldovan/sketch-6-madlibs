$(document).ready(function() {
    $("li").hover(changeStyle);

    function changeStyle() {
    	console.log("test");
    	$(this).toggleClass("clicked");
    }
});