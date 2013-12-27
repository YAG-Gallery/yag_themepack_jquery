####################################################
# General configurations for te galleria.io theme
#
# @author Daniel Lienert <daniel@lienert.cc>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.galleria {

	title = Galleria
	description = Galleria.io gallery

	resolutionConfigs {

		thumb >
		thumb {
		    width = 60c
		    height = 60c
		}

		medium >
		medium {
			width = 800c
			height = 300c
		}

		big >
		big {
		    width = 1000
		    height = 800
		}

	}


	## If set to 1, render the images in a JSON format instead of html tags
	jsonMode = 0

	## basepath to the gallery theme directory
	galleriaThemeBasePath = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Galleria/src/themes/

	## select a theme from the directory
	galleriaTheme = classic

	## width and height of the galleria frame
	width = 800
	height = 350

	##
	## These settings are directly converted to galleria js settings
    ##
	galleriaSettings {

		## Default options
		transition = slide
		thumbCrop = height

		## Specific for classic theme
		_toggleInfo = true
	}



    controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/Galleria/ItemList/List.html
		}
	}


	includeLibJS = jQuery
	includeLibCSS >

	includeJS {
		galleria10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Galleria/src/galleria.js
		//galleria20 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Galleria/src/themes/classic/galleria.classic.js
	}

	includeCSS >
	includeCSS {
	    //galleria10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Galleria/themes/classic/galleria.classic.css
	}
}