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
			width = 160
		}

		lightbox >
		lightbox {
			maxW = 1200
			maxH = 1200
		}

	}


	item {
		## Set partial used for rendering the lightBox meta data
	    lightBoxMetaPartial = EXT:yag/Resources/Private/Templates/Themes/LightBox/Partials/LightBoxMeta.html

		# Show the item title beneath the image
		showTitle = 1

		# Show the item description beneath the image
		showDescription = 1

		# Show the items tags beneath the image
		showTags = 1

		lightbox {
			# Show download link to original item
			showOriginalDownloadLink = 0

			# Perma Link to directly link to the lightbox
			showPermaLink = 0

			# Show the item title beneath the image
			showTitle = 1

			# Show the item description beneath the image
			showDescription = 1

			# Show the items tags beneath the image
			showTags = 0

			#Show the Copyright info
			showCopyRight = 0
		}
	}


	# Show the breadcrumb header
	showBreadcrumbs = 0

	# Show the TagFilter
	showTagFilter = 1

	# Show additional all filter which shows the items for all tags
	showAllFilter = 1

	itemList {
		itemsPerPage = 20
		pagerPartial = EXT:yag_themepack_jquery/Resources/Private/Templates/Wookmark/ItemList/Pager.html
	}

	# Enable endless scrolling via json api
	endlessScroll = 1

	# jQuery Wookmark Settings
	javaScriptSettings {
		theme = wookmark
		wookmark {
			align = center
			offset = 2
			autoResize = true
			itemWidth = 0
			flexibleWidth = 0
			resizeDelay = 50
			filterMode = or
		}
		lightbox {
			enabled = 1
			mainClass = mfp-with-zoom mfp-fade
			zoom {
			  enabled = true
			  duration = 200
			  easing = ease-in-out
			}
		}
	}

	controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/Wookmark/ItemList/List.html
		}
	}

	includeLibJS = jQuery, lightBox
	includeLibCSS = lightBox
	jsPosition = footer

	includeJS {
		json = EXT:yag_themepack_jquery/Resources/Public/Javascript/json2.min.js
		imagesloaded = EXT:yag_themepack_jquery/Resources/Public/Javascript/imagesloaded.pkgd.min.js
		wookmark = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Wookmark/jquery.wookmark.js
		init = EXT:yag_themepack_jquery/Resources/Public/Javascript/init.js
	}

	includeCSS >
	includeCSS {
		wookmark = EXT:yag_themepack_jquery/Resources/Public/CSS/Wookmark.css
	}
}
