$(function () {
    $('#rondellGallery-###contextIdentifier### > div').rondell({
        preset:'###preset###',
        radius:{
            x:260
        },
        scaling:2.4,
        isActive:function () {
            return !$('#fancybox-wrap').is(':visible');
        }
    });

    $('#rondellGallery-###contextIdentifier### a').fancybox({
        hideOnContentClick:false,
        padding:10,
        scrolling:'no',
        overlayColor:'#333',
        onStart:function (items, idx) {
            return $(items[idx]).parent().hasClass('rondellItemFocused');
        }
    });
});