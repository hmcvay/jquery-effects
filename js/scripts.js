$(document).ready(function() {
  $(".show").click(function() {
    $("#walrus-showing").fadeIn();
    $("#walrus-hidden").slideDown();
  });
  $(".hide").click(function() {
    $("#walrus-showing").fadeOut();
  });
});