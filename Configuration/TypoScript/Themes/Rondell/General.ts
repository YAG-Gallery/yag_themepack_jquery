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

	resolutionConfigs {

		thumb >
        thumb {
            maxW = 300
            maxH = 300
        }

		medium >
		medium {
			maxW = 800
			maxH = 800
		}

	}

	# Show the item title beneath the image
	showTitle = 1

	# Show the item description beneath the image
	showDescription = 1


	# jQuery Rondell Settings
	rondellSettings {
		# Presets
		preset = carousel


/*
Currently only presets are supported and forwarded to the template.
If you need further configuration options, feel free to alter the javascript template in Resources/Private/Templates/Rondell/JSTemplates/Rondell.js

		scaling = 2
		opacityMin = 0.05
		zIndex = 1000
		fadeTime = 300
		currentLayer = 0
		resizeableClass = resizeable
		smallClass = itemSmall
		hiddenClass	= itemHidden
		visibleItems = auto
		alwaysShowCaption = false
		repeating = true
		randomStart = false
		showContainer = true

		autoRotation {
            enabled = false
            direction = 0
            once = false
            delay = 5000
        }

		controls {
            enabled = true,
            fadeTime = 400,
            margin {
                x = 20
                y = 20
            }
        }

        strings	{
            prev = prev
            next = next
        }

        touch {
            enabled = true
            preventDefaults = true
            threshold = 100
        }
*/


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
		rondell30 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Rondell/lib/jquery.fancybox-1.3.4.pack.js
		rondell40 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Rondell/lib/jquery.rondell-0.8.6.min.js
	}

	includeCSS >
	includeCSS {
	    rondell10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Rondell/css/jquery.rondell.css
	    rondell20 = EXT:yag_themepack_jquery/Resources/Public/CSS/Rondell.css
	}
}