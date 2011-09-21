####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc> Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.isotope {

	themeInfo {
		name = isotope
	}
	
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
		    width = 230c
			height = 110c
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
	

}
