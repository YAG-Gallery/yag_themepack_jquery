###################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc>
# @package YAG
# @subpackage Typoscript
####################################################


########
# Justified Gallery configuration
########

plugin.tx_yag.settings.themes.justified {

	title = Rondell
	description = jQuery Rondell

	resolutionConfigs >
	resolutionConfigs {

		thumb {
			maxH = 200
		}

		lightbox {
			maxW = 2400
			maxH = 1600
		}

	}

	# Do not limit the item count
	itemsPerPage = 0

	controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/Justified/ItemList/List.html
		}
	}

	javaScriptSettings {
		theme = justified
		justified {
			selector = > figure > a, > div:not(.spinner)
			rowHeight = 180
			margins = 3
		}
	}

	includeLibJS = jQuery
	jsPosition = footer

	includeLibCSS >

	includeJS {
		justified10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/justified_gallery/dist/js/jquery.justifiedGallery.min.js
		justified20 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/photoswipe/dist/photoswipe.min.js
		justified30 = EXT:yag_themepack_jquery/Resources/Public/Javascript/photoswipe-ui-default.js
		justified40 = EXT:yag_themepack_jquery/Resources/Public/Javascript/init.js
		justified50 = EXT:yag_themepack_jquery/Resources/Public/Javascript/PhotoSwipe.js
	}

	includeCSS {
		justified10 = EXT:yag_themepack_jquery/Resources/Public/CSS/JustifiedGallery.css
		justified20 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/photoswipe/dist/photoswipe.css
		justified30 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/photoswipe/dist/default-skin/default-skin.css
	}
}
