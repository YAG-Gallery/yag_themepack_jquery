jQuery(function() {

    var $container = jQuery('####conatiner###');

    $container.isotope({
        itemSelector: '.element',
        masonryHorizontal  : {
            columnWidth : 120
        }
    });
});

jQuery('####filters### a').click(function() {
    var selector = jQuery(this).attr('data-filter');
    jQuery('####conatiner###').isotope({ filter: selector });
    return false;
});