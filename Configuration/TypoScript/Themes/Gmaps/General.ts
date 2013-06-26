####################################################
# Extlist configuration of the album 
#
# @author Sebastian Helzle <sebastian@helzle.net>
# @package YAG
# @subpackage Typoscript
####################################################


########
# Default Gmaps configuration
########

plugin.tx_yag.settings.themes.gmaps {

	title = Gmaps
	description = jQuery Gmaps

	resolutionConfigs {

		thumb >
		thumb {
			maxW = 200
			maxH = 200
		}

		lightbox >
		lightbox {
			maxW = 1200
			maxH = 1200
		}

		marker >
		marker {
			width = 50c
			height = 50c
		}

	}

	# Show the item title beneath the image
	showTitle = 1

	# Show the item description beneath the image
	showDescription = 1

	# Show the items tags beneath the image
	showTags = 1

	# Do not limit the item count
	itemList {
		itemsPerPage = 0
	}

	# Gmaps plugin Settings
	gmapsSettings {
		width = 100%
		height = 600
		showRouteToLink = false
		dropAnimation = true
		cluster = true
		langCode = 'de'
		showAllMarkers = true
		showFirstMarkerOnStart = false
		lightbox = true

		# Google Map Options. For further options, see https://developers.google.com/maps/documentation/javascript/reference?hl=de#MapOptions
		mapOptions {
			streetViewControl = false
			mapTypeControl = false
		}
	}

	controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/Gmaps/ItemList/List.html
		}
	}

	includeLibJS = jQuery
	jsPosition = footer

	includeLibCSS >

	includeJS {
		gmaps05 = HTTP://www.google.com/jsapi
		gmaps10 = EXT:yag_themepack_jquery/Resources/Public/Javascript/json2.min.js
		gmaps20 = EXT:yag_themepack_jquery/Resources/Public/Javascript/jquery.colorbox-min.js
		gmaps30 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Gmaps/js/markerclusterer.min.js
		gmaps40 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Gmaps/js/simplemarker.min.js
		gmaps50 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Gmaps/js/yag.gmaps.js
		gmaps60 = EXT:yag_themepack_jquery/Resources/Public/Javascript/init.js
	}

	includeCSS {
		wookmark10 = EXT:yag_themepack_jquery/Resources/Public/CSS/Colorbox/colorbox.css
		wookmark20 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Gmaps/css/Gmaps.css
	}
}
