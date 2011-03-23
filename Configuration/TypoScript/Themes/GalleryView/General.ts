####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc> Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.galleryView {
	
	resolutionConfigs {
		medium {
			width = 800
			height = 800
		}
	}
	
	controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/GalleryView/ItemList/List.html
		}
	}
	
	includeLibJS = jQuery,jQueryUi
	includeLibCSS = jQueryUi
	
	includeJS {
		10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/GalleryView/js/jquery.timers-1.2.js
		20 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/GalleryView/js/jquery.easing.1.3.js
		30 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/GalleryView/js/jquery.galleryview-3.0.js
	}
	
	includeCSS >
	includeCSS {
		10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/GalleryView/css/jquery.galleryview-3.0.css
	}
}