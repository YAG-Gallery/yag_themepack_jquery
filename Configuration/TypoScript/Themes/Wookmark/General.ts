####################################################
# Extlist configuration of the album 
#
# @author Sebastian Helzle <sebastian@helzle.net>
# @package YAG
# @subpackage Typoscript
####################################################


########
# Default Wookmark configuration
########

plugin.tx_yag.settings.themes.wookmark {

	title = Wookmark
	description = jQuery Wookmark

	resolutionConfigs {

		medium >
		medium {
			maxW = 280
			maxH = 400
		}

		lightbox >
		lightbox {
			maxW = 1200
			maxH = 1200
		}

	}

	# Show the item title beneath the image
	showTitle = 1

	# Show the item description beneath the image
	showDescription = 1

	# Show the items tags beneath the image
	showTags = 1

	# Do not limit the item count
	itemsPerPage = 0

	# jQuery Wookmark Settings

	wookmarkSettings {
		wookmark {
		}
		colorbox {
			enabled = 1
		}
		filterMode = or
	}

	controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/Wookmark/ItemList/List.html
		}
	}


	includeLibJS = jQuery
	jsPosition = footer

	includeLibCSS >

	includeJS {
		wookmark10 = EXT:yag_themepack_jquery/Resources/Public/Javascript/json2.min.js
		wookmark20 = EXT:yag_themepack_jquery/Resources/Public/Javascript/imagesloaded.pkgd.min.js
		wookmark30 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Wookmark/example-lightbox/js/jquery.colorbox-min.js
		wookmark40 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Wookmark/jquery.wookmark.min.js
		wookmark50 = EXT:yag_themepack_jquery/Resources/Public/Javascript/init.js
	}

	includeCSS {
		wookmark10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Wookmark/example-lightbox/css/colorbox.css
		wookmark20 = EXT:yag_themepack_jquery/Resources/Public/CSS/Wookmark.css
	}
}
