$(document).ready(function() {
	$("h1").hover(changeStyle);
	$("h2").hover(changeStyle);
	$("h3").hover(changeStyle);
	$("ul").hover(changeStyle);
    $("li").hover(changeStyle);

    $("noun").click(changeNoun);
    $("verb").click(changeVerb);
    $("adj").click(changeAdjective);

    const nouns = ["truthers", "devoted Christians", "religious fanatics", "conspiracists", "schemers", "zealots", "bringers of peace"];
    const adjectives = ["high", "towering", "soaring", "high-rise", "sky-scraping", "top", "peak", "record"];
    const verbs = ["shrinked", "withdrew", "condensed", "scaled down", "retracted", "lessened", "reduced", "decreased"];

    function changeStyle() {
    	$(this).toggleClass("hovered");
    }

    function changeNoun() {
    	$(this).toggleClass("randomNoun");
    }
});