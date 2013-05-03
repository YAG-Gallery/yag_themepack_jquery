
(function($) {
  $(function() {
    $('script[type="application/json"]').each(function() {
      var data = JSON.parse($(this).html());

      if (data.theme != undefined) {
        switch (data.theme) {
          case 'rondell':
            $(data.galleryId + " > *").rondell(data.options);
            break;
        }
      }
    })
  });
})(jQuery);
