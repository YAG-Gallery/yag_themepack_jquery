####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc> Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.superSized {

    title = SuperSized jQuery
    description = Uses the SuperSized Jquery Script

	controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/SuperSized/ItemList/List.html
		}
	}
	
    includeLibJS = jQuery
	
	includeJS {
        superSized = EXT:yag_themepack_jquery/Resources/Public/GallerySource/SuperSized/slideshow/js/supersized.3.2.5.min.js
	}
	
	includeCSS >
	includeCSS {
        superSized10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/SuperSized/slideshow/css/supersized.css
        superSized11 = EXT:yag_themepack_jquery/Resources/Public/CSS/SuperSized.css
	}

	# --------------------
	# SuperSized
	# --------------------
	superSizedSettings {
	    // General
        slideshow               =   1
        autoplay				=	1
        start_slide             =   1
        stop_loop				=	0
        random					= 	0
        slide_interval          =   3000
        transition              =   1
        transition_speed		=	1000
        new_window				=	1
        pause_hover             =   0
        keyboard_nav            =   1
        performance				=	2
        image_protect			=	1
        image_path				=	EXT:yag_themepack_jquery/Resources/Public/GallerySource/SuperSized/slideshow/img/

        //Size & Position
        min_width		        =   1024
        min_height		        =   768
        vertical_center         =   1
        horizontal_center       =   1
        fit_portrait         	=   1
        fit_landscape			=   0
        fit_always				=	0

        //Components
        slide_links				=	blank
		thumb_links				=	1
        navigation              =   1
        thumbnail_navigation    =   0
        slide_counter           =   1
        slide_captions          =   1
        progress_bar			=	1
		mouse_scrub				=	0
    }
}
