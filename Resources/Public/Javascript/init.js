
(function($) {
  $(function() {
    $('script[type="application/json"]').each(function() {
      var data = JSON.parse($(this).html());

      if (data.theme != undefined) {
        switch (data.theme) {
          case 'rondell':
            $(data.galleryId + " > *").rondell(data.options);
            break;
          case 'wookmark':
            var $handler = $(data.galleryId),
                $items = $('li', $handler),
                $filters = $('li', data.filterId);

            $handler.imagesLoaded(function() {
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
            });
            break;
          case 'gmaps':
            var serviceData = [],
                $container = $(data.galleryId),
                $dataSource = $('.yag-gmaps-data li', $container),
                $gmapsContainer = $('.yag-gmaps-container', $container),
                $row;

            $dataSource.each(function(idx) {
              $row = $(this);

              itemData = $row.data('yagGmaps');

              if (itemData.gpsLongitude != 0 && itemData.gpsLatitude != 0) {
                serviceData.push({
                  dataId: idx,
                  title: itemData.title,
                  latitude: itemData.gpsLongitude,
                  longitude: itemData.gpsLatitude,
                  notice: '<img src="' + $('img', $row).attr('src') + '" />'
                });
              }
            });

            $gmapsContainer
              .css({
                width: data.options.width,
                height: data.options.height
              })
              .ptGoogleMap($.extend({data: serviceData}, data.options));
            break;
        }
      }
    })
  });
})(jQuery);
