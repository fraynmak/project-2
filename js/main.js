console.log('jquery is loaded');
$(document).ready( function() {

  var hamburger = $(".hamburger");

  hamburger.on("click", function(e) {

    hamburger.toggleClass("is-active");

    // Do something else, like open/close menu
    $('div').toggle('.open-menu');
});
});