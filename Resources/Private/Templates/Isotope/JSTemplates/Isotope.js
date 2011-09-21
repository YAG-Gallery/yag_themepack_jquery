$(function() {

    var $container = $('####conatiner###');

    $container.isotope({
        itemSelector: '.element',
        masonryHorizontal  : {
            columnWidth : 120
        }
    });
});

$('####filters### a').click(function() {
    var selector = $(this).attr('data-filter');
    $('####conatiner###').isotope({ filter: selector });
    return false;
});