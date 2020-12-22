// Siblings
// Let's start with the method siblings()

/*

$(document).ready(function() {
    $("h2").siblings().css({"background-color": "yellow", "color":"brown", "border": "3px solid green"});
});

*/


// Next() method

/*
$(document).ready(function() {
    $("h1").next().css({"background-color": "yellow", "color":"brown", "border": "3px solid green"});
});
*/

// nextAll() method

/*
$(document).ready(function() {
    $("h2").nextAll().css({"background-color": "yellow", "color":"brown", "border": "3px solid green"});
});
*/

// nextUntil()
/*

$(document).ready(function() {
    $("h1").nextUntil("ul").css({"background-color": "yellow", "color":"brown", "border": "3px solid green"});
});

*/

// prev()
/*

$(document).ready(function() {
    $("h2").prev().css({"background-color": "yellow", "color":"brown", "border": "3px solid green"});
});

*/

// prevAll()

/*
$(document).ready(function() {
    $("span").prevAll().css({"background-color": "yellow", "color":"brown", "border": "3px solid green"});
})
*/

// prevUntil()

$(document).ready(function() {
   $("h4").prevUntil("h1").css({"background-color": "yellow", "color":"brown", "border": "3px solid green"}); 
});