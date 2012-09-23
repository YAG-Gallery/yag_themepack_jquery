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



    galleriaSettings {
		// If set to 1, render the images in a JSON format instead of html tags
		jsonMode = 0

		// basepath to the gallery theme directory
		themeBasePath = typo3conf/ext/yag_themepack_jquery/Resources/Public/GallerySource/Galleria/src/themes/

		// select a theme from the directory
		theme = classic

		// width and height of the galleria frame
		width = 800
		height = 370
    }


    controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/Galleria/ItemList/List.html
		}
	}

	includeLibJS = jQuery
	includeLibCSS >

	includeJS {
		galleria = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Galleria/src/galleria.js
	}

	includeCSS {
	    #nivoSlider10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/NivoSlider/themes/default/default.css

	}
}