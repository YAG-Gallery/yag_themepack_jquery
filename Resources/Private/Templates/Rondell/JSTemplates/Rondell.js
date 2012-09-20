$(function () {
    $('#rondellGallery-###contextIdentifier### > a').rondell({
        ###rondellSettings###
    });

    $('#rondellGallery-###contextIdentifier### a').fancybox({
        hideOnContentClick:false,
        padding:10,
        scrolling:'no',
        overlayColor:'#333',
        onStart:function (items, idx) {
            return $(items[idx]).hasClass('rondellItemFocused') || $('#fancybox-wrap').is(':visible');
        }
    });
});