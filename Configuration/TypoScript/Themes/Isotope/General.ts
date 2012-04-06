####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc> Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.isotope {

    title = Isotope
    description = Uses the Isotope Jquery Script to display images

	resolutionConfigs {

		bigSquare {
			width = 230c
			height = 230c
		}

		smallSquare {
		    width = 110c
			height = 110c
		}

		verticalLong {
		    width = 230c
			height = 110c
		}

		horizontalLong {
		    width = 110c
			height = 230c
		}
	}
	
	controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/Isotope/ItemList/List.html
		}
	}
	
    includeLibJS = jQuery,jQueryFancybox
	includeLibCSS = jQueryFancybox

	
	includeJS {
        isotope10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Isotope/jquery.isotope.min.js
	}
	
	includeCSS >
	includeCSS {
        #isotope10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Isotope/css/style.css
        isotope11 = EXT:yag_themepack_jquery/Resources/Public/CSS/Isotope.css
	}

	# --------------------
	# Isotope
	# --------------------
	
    blockSizeWeighting {
        smallSquare     = 40
        bigSquare       = 20
        verticalLong    = 20
        horizontalLong  = 20
    }


	/**
	 * FancyBox settings. See http://fancybox.net/api for a detailed description
	 */
	fancybox {
		margin = 10
		padding = 0
		opacity = 0
		modal = 0
		cyclic = 1
		scrolling = auto
		hideOnOverlayClick = 1
		hideOnContentClick = 0
		overlayShow = 1
		overlayOpacity = 0.8
		overlayColor = #000
		transitionIn = elastic
		transitionOut = elastic
		titlePosition = over
		autoScale =	1
		titleShow = 1
		speedIn = 300
		speedOut = 300
		changeFade = fast
		easingIn = swing
		easingOut = swing
		showCloseButton = 1
		showNavArrows = 1
		enableEscapeButton = 1
	}
}
