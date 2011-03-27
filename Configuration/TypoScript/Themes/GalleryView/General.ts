####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc> Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.galleryView {
	
	resolutionConfigs {
		medium {
			width = 800
			height = 800
		}
	}
	
	controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/GalleryView/ItemList/List.html
		}
	}
	
	includeLibJS = jQuery,jQueryUi
	includeLibCSS = jQueryUi
	
	includeJS {
		10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/GalleryView/js/jquery.timers-1.2.js
		20 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/GalleryView/js/jquery.easing.1.3.js
		30 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/GalleryView/js/jquery.galleryview-3.0.js
	}
	
	includeCSS >
	includeCSS {
		10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/GalleryView/css/jquery.galleryview-3.0.css
	}
	
	
	## Configuration for gallery view
	
	transition_interval = 0
	transition_speed 	= 1000
	easing 				= 0
	
	pause_on_hover 		= false
	show_panels			= true
	panel_width			= 800
	panel_height		= 500
	panel_animation		= crossfade
	overlay_opacity		= 0.7
	overlay_position	= bottom
	panel_scale			= crop
	show_panel_nav		= true
	show_overlays		= true
	
	show_filmstrip		= true
	frame_width			= 120
	frame_height		= 80
	start_frame			= 1
	filmstrip_size		= 3
	frame_opacity		= 0.5
	filmstrip_style		= scroll
	filmstrip_position	= bottom
	show_filmstrip_nav	= true
	frame_gap			= 15
	frame_scale			= crop
	show_captions		= false

	pointer_size		= 0
	animate_pointer		= true
}