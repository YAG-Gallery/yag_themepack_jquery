(function ($) {
    var $window = $(window),
        $document = $(document);

    /**
     * Rondell initialization function
     */
    function initRondell($selector, settings) {
        $selector.rondell(settings.rondell);
    }

    /**
     * Wookmark initialization function
     */
    function initWookmark($selector, settings) {
        var $list = $('ul:first', $selector),
            $items = $list.children(),
            $filterBlock = $('#' + $selector.data('yag-wookmark-filter-id')),
            $filters = $('li', $filterBlock);
            $pager = $('.yag-wookmark-pager a', $selector),
            $loaderCircle = $('.yag-wookmark-loader-circle', $selector),
            $itemTemplate = $items.eq(0).clone(),
            currentPage = 1,
            isLoading = false;

        function initWookmarkItems() {
            $items = $list.children();
            $items.wookmark($.extend(settings.wookmark, {
                container: $selector
            }));
        }

        // Initialize lightbox if enabled in options
        if (settings.lightbox.enabled && $.fn.magnificPopup) {
            $selector.magnificPopup($.extend(true, {
                delegate: 'li > a', // child items selector, by clicking on it popup will open
                type: 'image',
                gallery: {
                    enabled: true
                },
                image: {
                    verticalFit: false,
                    titleSrc: function (item) {
                        var caption = item.el.attr('title'),
                            description = $(item.el).siblings('.yag-lightbox-meta').html().trim();
                        return description || caption;
                    }
                }
            }, settings.lightbox));
        }

        // Initialize pager if it's enabled
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

                for (; i < data.length; i++) {
                    image = data[i];
                    $newItem = $itemTemplate.clone();
                    $('img', $newItem).attr({
                        'width': image.mediumWidth,
                        'height': image.mediumHeight,
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
                $selector.imagesLoaded(function () {
                    initWookmarkItems();
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

        // Initialize filters
        $filterBlock.on('click.wookmark', 'li', function (event) {
            var $item = $(event.currentTarget),
                activeFilters = [];
            $item.toggleClass('active');

            // Collect active filter strings
            $filters.filter('.active').each(function () {
                activeFilters.push($(this).data('filter'));
            });

            $items.wookmarkInstance.filter(activeFilters, settings.wookmark.filterMode);
        });

        // Init wookmark after images have loaded
        $selector.imagesLoaded(initWookmarkItems);
    }

    /**
     * Gmaps initialization function
     */
    function initGmaps($selector, settings) {
        var serviceData = [], i, itemData, currentItem, itemsPerColumn = 4,
            longitude, latitude, locationHash,
            listData = $selector.data('yag-list-data'),
            itemLength = listData.length,
            itemGroupId, itemGroup, itemGroups = {}, markerContent, markerTitle;

        // Check for items on the same position
        for (i = 0; i < itemLength; i++) {
            itemData = listData[i];
            locationHash = (itemData.gpsLongitude + '-' + itemData.gpsLatitude).replace(/\./g, '-');
            if (!itemGroups[locationHash]) itemGroups[locationHash] = [];
            itemGroups[locationHash].push(i);
        }

        // Create markers and groups
        for (itemGroupId in itemGroups) {
            itemGroup = itemGroups[itemGroupId];
            itemData = listData[itemGroup[0]];
            try {
                longitude = parseFloat(itemData.gpsLongitude);
                latitude = parseFloat(itemData.gpsLatitude);
            } catch (e) {
                longitude = latitude = 0;
            }

            if (longitude != 0 && latitude != 0) {
                if (itemGroup.length > 1) {
                    // Create single groupmarker for multiple items
                    markerContent = '<div class="yag-gmaps-item-group" style="width:' + itemData.markerWidth * Math.min(itemGroup.length, itemsPerColumn) + 'px;">';
                    markerTitle = '';
                    for (i = 0; i < itemGroup.length; i++) {
                        currentItem = listData[itemGroup[i]];
                        markerContent += '<a class="yag-gmaps-item-link" rel="gmaps-lightbox-' + itemGroupId + '" href="' +
                            currentItem.lightbox + '" title="' + currentItem.title + '">' +
                            '<img width="' + currentItem.markerWidth + '" height="' + currentItem.markerHeight +
                            '" src="' + currentItem.marker + '" alt="' + currentItem.title + '" /></a>';
                    }
                    markerContent += '</div>';
                } else {
                    // Create single marker for one item
                    markerTitle = itemData.title;
                    markerContent = '<a class="yag-gmaps-item-link" href="' + itemData.lightbox + '" title="' +
                        itemData.title + '">' +
                        '<img width="' + itemData.thumbWidth + '" height="' + itemData.thumbHeight +
                        '" src="' + itemData.thumb + '" alt="' + itemData.title + '" />' +
                        '</a><p>' + itemData.description + '</p>';
                }

                serviceData.push({
                    dataId: itemGroupId,
                    title: markerTitle,
                    latitude: longitude,
                    longitude: latitude,
                    icon: itemData.marker,
                    markerContent: markerContent
                });
            }
        }

        if (settings.lightbox) {
            $selector.on('click', '.yag-gmaps-item-link', function (e) {
                e.preventDefault();
                $(this).parent().children('.yag-gmaps-item-link').colorbox({
                    open: true,
                    maxWidth: '90%',
                    maxHeight: '90%'
                });
            });
        }

        $selector
            .css({
                width: settings.width,
                height: settings.height
            })
            .yagGoogleMap($.extend({data: serviceData}, settings.gmaps));
    }

    /**
     * Loop over all yag galleries and init the frontend plugins
     */
    $(function () {
        $('.yag-gallery').each(function () {
            var $self = $(this),
                settings = $self.data('yag-gallery-settings');

            switch (settings.theme) {
                case 'rondell':
                    initRondell($self, settings);
                    break;
                case 'wookmark':
                    initWookmark($self, settings);
                    break;
                case 'gmaps':
                    initGmaps($self, settings);
                    break;
            }
        });
    });
})(jQuery);
