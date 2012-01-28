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

	# Show the item title beneath the image
	showTitle = 1

	# Show the item description beneath the image
	showDescription = 1


	# jQuery Rondell Settings
	rondellSettings {

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
		rondell20 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Rondell/lib/jquery.fancybox-1.3.4.pack.js
		rondell30 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Rondell/lib/jquery.rondell-0.8.6.min.js
	}

	includeCSS >
	includeCSS {
	    rondell10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Rondell/css/jquery.rondell.css
	}
}