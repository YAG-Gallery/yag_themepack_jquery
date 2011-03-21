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
			list.template = EXT:yag_theme_simpleviewer/Resources/Private/Templates/GalleryView/ItemList/List.html
		}
	}
}