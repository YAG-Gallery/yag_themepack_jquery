
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
                $filters = $('li', data.filterId),
                $pager = $('.yag-wookmark-pager a', $handler),
                $itemTemplate = $items.eq(0).clone(),
                currentPage = 1,
                isLoading = false;

            $handler.imagesLoaded(function() {
              // Initialize main wookmark plugin
              $items.wookmark($.extend(data.options.wookmark, {
                container: $handler
              }));

              // Initialize colorbox if enabled in options
              if (data.options.lightbox.enabled && $.fn.colorbox) {
                $('li a', $handler).colorbox($.extend({rel: 'wookmark_1'}, data.options.lightbox));
              }

              // Initialize filters
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
            var serviceData = [], i, itemData,
                $gmapsContainer = $(data.galleryId);

            for (i = 0; i < data.listData.length; i++) {
              itemData = data.listData[i];

              if (itemData.gpsLongitude != 0 && itemData.gpsLatitude != 0) {
                serviceData.push({
                  dataId: i,
                  title: itemData.title,
                  latitude: itemData.gpsLongitude,
                  longitude: itemData.gpsLatitude,
                  icon: itemData.marker,
                  markerContent: '' +
                    '<a href="' + itemData.lightbox + '" rel="gmaps-lightbox-' + data.galleryId + '" title="Open in lightbox">' +
                      '<img src="' + itemData.thumb + '" alt="' + itemData.title + '" />' +
                    '</a>' +
                    '<p>' + itemData.description + '</p>'
                });
              }
            }

            $gmapsContainer
              .css({
                width: data.options.width,
                height: data.options.height
              })
              .yagGoogleMap($.extend({data: serviceData}, data.options));
            break;
        }
      }
    })
  });
})(jQuery);
