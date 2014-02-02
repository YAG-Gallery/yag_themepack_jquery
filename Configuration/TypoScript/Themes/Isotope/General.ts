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

		medium {
			maxW = 1200
			maxH = 1200
		}
	}
	
	controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/Isotope/ItemList/List.html
		}
	}
	
	includeLibJS = jQuery,lightBox
	includeLibCSS = lightBox

	
	includeJS {
        isotope10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Isotope/jquery.isotope.min.js
        lightbox = EXT:yag/Resources/Public/Js/LightBox.js
	}
	
	includeCSS >
	includeCSS {
        isotope10 = EXT:yag_themepack_jquery/Resources/Public/CSS/Isotope.css
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


	javaScriptSettings {
		lightBox {
			enabled = 1
			mainClass = mfp-with-zoom mfp-fade
			zoom {
				enabled = true
				duration = 200
				easing = ease-in-out
			}
		}
	}
}
