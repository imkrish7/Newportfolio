$(document).ready(function (event) {
    
    $('.bar').click(function(){
        $('.side-menu').fadeIn("slow");
        $('.time').show("time");
        $('.bar').hide("bar");
    })
     $('.time').click(function () {
         $('.side-menu').fadeOut("slow");
         $('.time').hide("time");
         $('.bar').show("bar");
          $('nav').removeAttr("style");
     })
   
})

