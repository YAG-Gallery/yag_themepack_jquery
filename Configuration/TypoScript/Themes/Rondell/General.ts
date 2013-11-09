    ####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc> Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################


########
# Default Rondell configuration
########

plugin.tx_yag.settings.themes.rondell {

	title = Rondell
	description = jQuery Rondell

	resolutionConfigs {

		medium >
		medium {
			maxW = 500
			maxH = 500
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

	# Do not limit the item count
	itemsPerPage = 0

	# jQuery Rondell Settings

	rondellSettings {
		# Presets (carousel, products, pages, cubic, gallery, thumbGallery)
		preset = carousel
	}

	controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/Rondell/ItemList/List.html
		}
	}


	includeLibJS = jQuery
	jsPosition = footer

	includeLibCSS >

	includeJS {
		rondell30 = EXT:yag_themepack_jquery/Resources/Public/Javascript/json2.min.js
		rondell40 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Rondell/dist/jquery.rondell.min.js
		rondell50 = EXT:yag_themepack_jquery/Resources/Public/Javascript/init.js
	}

	includeCSS {
		rondell10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Rondell/dist/jquery.rondell.min.css
		rondell20 = EXT:yag_themepack_jquery/Resources/Public/CSS/Rondell.css
	}
}


########
# Rondell gallery configuration
# Cubic preview images
########

plugin.tx_yag.settings.themes.rondellGallery < plugin.tx_yag.settings.themes.rondell
plugin.tx_yag.settings.themes.rondellGallery {

	title = Rondell Gallery
	description = jQuery Rondell in Gallery mode

	item {
		showTitle = 0
		showDescription = 0
	}

	medium >
	medium {
		maxW = 580
		maxH = 580
	}

	rondellSettings {
		# Presets (carousel, products, pages, cubic, gallery, thumbGallery)
		preset = thumbGallery
		center {
			top = 215
			left = 280
		}

		size {
			height = 430
			width = 810
		}

		itemProperties {

			sizeFocused {
				width = 480
				height = 420
			}

			size {
				width = 85
				height = 85
			}
		}

		scrollbar {
			enabled = true
			style {
				width = 240
				right = 30
				bottom = 50
			}
		}

		special {
			thumbsOffset {
				x = 525
				y = 70
			}
		}
	}
}
