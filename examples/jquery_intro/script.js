$(function(){
  //whatever i put here will run when the page is loaded
  $('#favorite-color').hover(changeToGreen);
  $('h1').click(changeToGreen);
  $('#my-form').keydown(function(event) {
    if (event.which === 84) {
      $('h1:first').hide();
    }
  }
});

  function changeToGreen() {
    $(this).toggleClass("green");
  }

