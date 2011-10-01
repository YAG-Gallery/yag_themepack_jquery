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
			height = 235c
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
			height = 235c
		}
	}
	
	controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/Isotope/ItemList/List.html
		}
	}
	
    includeLibJS = jQuery,jQueryShadowBox
	includeLibCSS = jQueryShadowBox

	
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
}
