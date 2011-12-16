####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc> Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.rondell {

	title = Rondell
	description = jQuery Rondell

	resolutionConfigs >
	resolutionConfigs {

        thumb {
            maxW = 300
            maxH = 300
        }

		medium {
			maxW= 800
			maxH = 800
		}

	}


    controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/Rondell/ItemList/List.html
		}
	}

	includeLibJS = jQuery
	includeLibCSS >

	includeJS {
		rondell10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Rondell/lib/modernizr-2.0.6.min.js
		rondell20 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Rondell/lib/jquery.rondell-0.8.3.min.js
	}

	includeCSS >
	includeCSS {
	    rondell10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Rondell/css/jquery.rondell.css

	}
}