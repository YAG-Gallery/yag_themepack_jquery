
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
            var serviceData = [], i, itemData, currentItem,
                longitude, latitude, locationHash,
                $gmapsContainer = $(data.galleryId),
                itemLength = data.listData.length,
                itemGroupId, itemGroup, itemGroups = {}, markerContent;

            // Check for items on the same position
            for (i = 0; i < itemLength; i++) {
              itemData = data.listData[i];
              locationHash = (itemData.gpsLongitude + '-' + itemData.gpsLatitude).replace(/\./g, '-');
              if (!itemGroups[locationHash]) itemGroups[locationHash] = [];
              itemGroups[locationHash].push(i);
            }

            // Create markers and groups
            for (itemGroupId in itemGroups) {
              itemGroup = itemGroups[itemGroupId];
              itemData = data.listData[itemGroup[0]];
              try {
                longitude = parseFloat(itemData.gpsLongitude);
                latitude = parseFloat(itemData.gpsLatitude);
              } catch(e) {
                longitude = latitude = 0;
              }

              if (longitude != 0 && latitude != 0) {
                if (itemGroup.length > 1) {
                  // Create single groupmarker for multiple items
                  markerContent = ''
                  for (i = 0; i < itemGroup.length; i++) {
                    currentItem = data.listData[itemGroup[i]];
                    markerContent += '<a class="yag-gmaps-item-link" rel="gmaps-lightbox-' + itemGroupId + '" href="' +
                      currentItem.lightbox + '" title="' + currentItem.title + '">' +
                      '<img width="' + currentItem.markerWidth + '" height="' + currentItem.markerHeight +
                      '" src="' + currentItem.marker + '" alt="' + currentItem.title + '" /></a>';
                  }
                } else {
                  // Create single marker for one item
                  markerContent = '<a class="yag-gmaps-item-link" href="' + itemData.lightbox + '" title="' +
                    itemData.title + '">' +
                    '<img width="' + itemData.thumbWidth + '" height="' + itemData.thumbHeight +
                    '" src="' + itemData.thumb + '" alt="' + itemData.title + '" />' +
                    '</a><p>' + itemData.description + '</p>';
                }

                serviceData.push({
                  dataId: itemGroupId,
                  title: itemData.title,
                  latitude: longitude,
                  longitude: latitude,
                  icon: itemData.marker,
                  markerContent: markerContent
                });
              }
            }

            if (data.options.lightbox) {
              $gmapsContainer.delegate('.yag-gmaps-item-link', 'click', function(e) {
                e.preventDefault();
                $(this).parent().children('.yag-gmaps-item-link').colorbox({
                  open: true,
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
