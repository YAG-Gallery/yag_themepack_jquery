jQuery(document).ready(function ($) {
    // We only want these styles applied when javascript is enabled
    $('div.navigation').css({'width':'300px', 'float':'left'});
    $('div.galleriffic-content').css('display', 'block');

    // Initially set opacity on thumbs and add
    // additional styling for hover effect on thumbs
    var onMouseOutOpacity = 0.67;
    $('#thumbs-###contextIdentifier### ul.thumbs li').opacityrollover({
        mouseOutOpacity:onMouseOutOpacity,
        mouseOverOpacity:1.0,
        fadeSpeed:'fast',
        exemptionSelector:'.selected'
    });



    var gallerifficSettings = {
        ###yagSettings###,
        imageContainerSel:'#slideshow',
        controlsContainerSel:'#controls',
        captionContainerSel:'#caption',
        loadingContainerSel:'#loading',
        playLinkText:'###LLL:tx_yag_general.playSlideshow###',
        pauseLinkText:'###LLL:tx_yag_general.pauseSlideshow###',
        prevLinkText:'&lsaquo; ###LLL:tx_yag_general.previous###',
        nextLinkText:'###LLL:tx_yag_general.next### &rsaquo;',

        onSlideChange:function (prevIndex, nextIndex) {
            // 'this' refers to the gallery, which is an extension of $('#thumbs')
            this.find('ul.thumbs').children()
                    .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
                    .eq(nextIndex).fadeTo('fast', 1.0);
        },

        onPageTransitionOut:function (callback) {
            this.fadeTo('fast', 0.0, callback);
        },

        onPageTransitionIn:function () {
            this.fadeTo('fast', 1.0);
        }
    };

    // Initialize Advanced Galleriffic Gallery
    var gallery = $('#thumbs-###contextIdentifier###').galleriffic(gallerifficSettings);
});