function setCookie(key, value) {
  var expires = new Date();
  expires.setTime(expires.getTime() + (60 * (60 * 1000)) );
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + "; path=/";
}

function getCookie(key) {
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}

(function($){
  jQuery(document).ready(function() {

    // set a cookie
    if (getCookie('in_development') == 'true') {
      $(".popup-frame").hide();
    } else {
      $(".popup-frame").show();
      setCookie('in_development','true');
    }

    $( ".popup" ).click(function() {
      $(".popup-frame").hide();
    });

    // A minimal slideshow for the #quote-box
    var currentIndex = 0,
    items = $('#quote-frame .quote'),
    itemAmt = items.length;
    $('#quote-frame .quote:first-child').addClass('active');

    function cycleItems() {
      var item = $('#quote-frame .quote').eq(currentIndex);
      items.removeClass('active');
      item.addClass('active');
    }
    var autoSlide = setInterval(function() {
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems();
    }, 4000);

    // Determine which is the tallest of the .quote and set all the rest to that same height
    var maxHeight = -1;
    $('#quote-frame .quote').each(function() {
      maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });
    $('#quote-frame .paper').height(maxHeight);

  });

})(jQuery);
