####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc> Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.nivoSlider {

	title = Nivo Slider
	description = Nivo Slider

	resolutionConfigs {

		medium >
		medium {
			width = 600c
			height = 300c
		}

		thumb >
		thumb {
		    width = 60c
		    height = 60c
		}
	}


    // This CSS is only included if nivoSliderSettings.controlNavThumbs is true
	thumbNavCSS = EXT:yag_themepack_jquery/Resources/Public/CSS/NivoSlider/ThumbNav.css

    nivoSliderSettings {
        // Specify sets like: 'sliceDown,sliceDownLeft,sliceUp,sliceUpLeft,sliceUpDown,sliceUpDownLeft,fold,fade,random,slideInRight,slideInLeft,boxRandom,boxRain,boxRainReverse,boxRainGrow,boxRainGrowReverse'
        effect = random

        // For slice animations
        slices = 15

        // For box animations
        boxCols = 8

        // For box animations
        boxRows = 4

        // Slide transition speed
        animSpeed = 500

        // How long each slide will show
        pauseTime = 3000

        // Set starting Slide (0 index)
        startSlide = 0

        // Next & Prev navigation
        directionNav = true

        // Only show on hover
        directionNavHide = true

        // 1,2,3... navigation
        controlNav = true

        // Use thumbnails for Control Nav
        controlNavThumbs = true

        // Use left & right arrows
        keyboardNav = true

        // Stop animation while hovering
        pauseOnHover = true

        // Force manual transitions
        manualAdvance = false

        // Universal caption opacity
        captionOpacity = 0.8

        // Start on a random slide
        randomStart = false
    }


    controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/NivoSlider/ItemList/List.html
		}
	}

	includeLibJS = jQuery
	includeLibCSS >

	includeJS {
		nivoSlider = EXT:yag_themepack_jquery/Resources/Public/GallerySource/NivoSlider/jquery.nivo.slider.pack.js
	}

	includeCSS {
	    nivoSlider10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/NivoSlider/themes/default/default.css
	    nivoSlider40 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/NivoSlider/nivo-slider.css

	}
}