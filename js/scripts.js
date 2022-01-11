$(document).ready(function() {
  $(".show").click(function() {
    $("#walrus-showing").fadeIn();
    $("#walrus-hidden").slideDown();
  });
  $(".hide").click(function() {
    $("#walrus-showing").fadeOut();
  });
  $(".click-me").click(function() {
    $(".appear").slideToggle();
  });
  $(".secret").click(function() {
    $(".smiley").fadeIn();
  });
});
