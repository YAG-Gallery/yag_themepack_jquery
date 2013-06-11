
(function($) {
  $(function() {
    $('script[type="application/json"]').each(function() {
      var data = JSON.parse($(this).html()),
          $window = $(window),
          $document = $(document);

      if (data.theme != undefined) {
        switch (data.theme) {
          case 'rondell':
            $(data.galleryId + " > *").rondell(data.options);
            break;
          case 'wookmark':
            var $handler = $(data.galleryId),
                $list = $('ul', $handler),
                $items = $('li', $handler),
                $filters = $('li', data.filterId),
                $pager = $('.yag-wookmark-pager a', $handler),
                $loaderCircle = $('.yag-wookmark-loader-circle', $handler),
                $itemTemplate = $items.eq(0).clone(),
                currentPage = 1,
                isLoading = false;

            function initItems() {
              // Refresh item list
              $items = $('li', $handler);

              // Initialize main wookmark plugin
              $items.wookmark($.extend(data.options.wookmark, {
                container: $handler
              }));

              // Initialize colorbox if enabled in options
              if (data.options.lightbox.enabled && $.fn.colorbox) {
                $('li a', $handler).colorbox($.extend({rel: 'wookmark_1'}, data.options.lightbox));
              }

              // Initialize filters
              $filters.unbind('click').click(function(event) {
                var $item = $(event.currentTarget),
                  activeFilters = [];
                $item.toggleClass('active');

                // Collect active filter strings
                $filters.filter('.active').each(function() {
                  activeFilters.push($(this).data('filter'));
                });

                $items.wookmarkInstance.filter(activeFilters, data.options.filterMode);
              });
            }

            $handler.imagesLoaded(function() {

              initItems();

              if ($pager.length) {
                // Handlers for api
                function loadData(page) {
                  isLoading = true;
                  $loaderCircle.show();

                  var pageUrl = $pager.eq(page).attr('href');

                  $.ajax({
                    url: pageUrl,
                    dataType: 'json',
                    success: onLoadData
                  });
                };

                function onLoadData(data) {
                  isLoading = false;

                  // Increment page index for future calls.
                  currentPage++;

                  // Create HTML for the images.
                  var i = 0, image, $newItem;

                  for(; i < data.length; i++) {
                    image = data[i];
                    $newItem = $itemTemplate.clone();
                    $('img', $newItem).attr({
                      'width': image.mediumWidth,
                      'height':image.mediumHeight,
                      'src': image.medium,
                      'alt': image.title
                    });
                    $('a', $newItem).attr('href', image.lightbox);
                    $('.yag-wookmark-description', $newItem).text(image.description);
                    $('.yag-wookmark-title', $newItem).text(image.title);
                    $('.yag-wookmark-tags', $newItem).text(image.tags);
                    $newItem.data('filterClass', image.tags.split(','));

                    // Add item to list
                    $list.append($newItem);
                  }
                  $handler.imagesLoaded(function() {
                    initItems();
                    $loaderCircle.hide();
                  });
                };

                // Initialize endless scroll handlers
                function onScroll() {
                  if (!isLoading && currentPage < $pager.length) {
                    var winHeight = window.innerHeight ? window.innerHeight : $window.height();

                    if ($window.scrollTop() + winHeight > $document.height() - 100) {
                      loadData(currentPage);
                    }
                  }
                };

                $window.bind('scroll.wookmark', onScroll);
              }
            });
            break;
          case 'gmaps':
            var serviceData = [], i, itemData,
                $gmapsContainer = $(data.galleryId);

            for (i = 0; i < data.listData.length; i++) {
              itemData = data.listData[i];

              try {
                itemData.gpsLongitude = parseFloat(itemData.gpsLongitude);
                itemData.gpsLatitude = parseFloat(itemData.gpsLatitude);
              } catch(e) {
                itemData.gpsLongitude = itemData.gpsLatitude = 0;
              }

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

            if (data.options.lightbox) {
              $gmapsContainer.delegate('a', 'click.yag-gmaps', function(e) {
                e.preventDefault();
                $.colorbox({
                  rel: '[rel=gmaps-lightbox-' + data.galleryId + ']',
                  href: $(this).attr('href'),
                  maxWidth: '90%',
                  maxHeight: '90%'
                });
              });
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
