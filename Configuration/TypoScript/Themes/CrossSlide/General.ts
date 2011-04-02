####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc> Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.crossSlide {
	
	resolutionConfigs {
		medium {
			width = 800
		}
	}
	
	controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/CrossSlide/ItemList/List.html
		}
	}
	
	includeLibJS = jQuery
	includeLibCSS = 
	
	includeJS {
		crossSlide = EXT:yag_themepack_jquery/Resources/Public/GallerySource/CrossSlide/jquery.cross-slide.min.js
	}
	
	includeCSS >
	includeCSS {
		
	}
}