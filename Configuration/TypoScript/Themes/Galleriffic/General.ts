####################################################
# General Configuration of Galleriffic
#
# @author Daniel Lienert <daniel@lienert.cc>
# @package YAG jQuery Themepack
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.galleriffic {

	title  = Galleriffic
	description = Galleriffic script by Trent Foley

	resolutionConfigs {
		medium >
		medium {
			maxW = 600
			maxH = 400
		}

		thumb >
		thumb {
			width = 75c
			height = 75c
		}
	}
	
	controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/Galleriffic/ItemList/List.html
		}
	}
	
	includeLibJS = jQuery
	includeLibCSS =
	
	includeJS {
		galleriffic10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Galleriffic/js/jquery.galleriffic.js
		galleriffic20 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/Galleriffic/js/jquery.opacityrollover.js
	}
	
	includeCSS >
	includeCSS {
		galleriffic20 = EXT:yag_themepack_jquery/Resources/Public/CSS/Galleriffic.css
	}


	galleriffic {
        delay = 2500
        numThumbs = 15
        preloadAhead = 10
        enableTopPager = false
        enableBottomPager = true
        maxPagesToShow = 7
        renderSSControls = 1
        renderNavControls = 1
        nextPageLinkText = &rsaquo;
        prevPageLinkText =  &lsaquo;
        enableHistory = 0
        autoStart = 0
        syncTransitions = 1
        defaultTransitionDuration = 900
	}

}