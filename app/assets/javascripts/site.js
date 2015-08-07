// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){
  $('.send').on('click', function(){
    console.log("Detected");
      setTimeout(function(){
        $('#subject').val('');
        $('#message').val('');
    }, 1000)
  })
})
