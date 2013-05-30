
(function($) {
  $(function() {
    $('script[type="application/json"]').each(function() {
      var data = JSON.parse($(this).html());

      if (data.theme != undefined) {
        switch (data.theme) {
          case 'rondell':
            $(data.galleryId + " li").rondell(data.options);
            break;
          case 'wookmark':
            var $handler = $(data.galleryId),
                $items = $('li', $handler),
                $filters = $('li', data.filterId);

            $items.wookmark($.extend(data.options.wookmark, {
              container: $handler
            }));

            if (data.options.colorbox.enabled && $.fn.colorbox) {
              $('li a', $handler).colorbox($.extend({rel: 'wookmark_1'}, data.options.lightbox));
            }

            $filters.click(function(event) {
              var $item = $(event.currentTarget),
                  activeFilters = [];
              $item.toggleClass('active');

              // Collect active filter strings
              $filters.filter('.active').each(function() {
                activeFilters.push($(this).data('filter'));
              });

              $items.wookmarkInstance.filter(activeFilters, data.options.filterMode);
            });

            break;
        }
      }
    })
  });
})(jQuery);
