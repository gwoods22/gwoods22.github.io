$(document).ready(function() {
  $("#myWork").click(function() {
    $('html, body').animate({
        scrollTop: $("#main").offset().top
    }, 900);
  });
});
