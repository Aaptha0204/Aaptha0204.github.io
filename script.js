(function ($) {
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page
  $(window).on('load hashchange', function(){
    $('.content-region').hide();
    $('.topnav a').removeClass('active');
    var region = location.hash.toString() || $('.topnav a:first').attr('href');
    $(region).show();
    $('.topnav a[href="'+ region +'"]').addClass('active'); 
  });
})(jQuery);

