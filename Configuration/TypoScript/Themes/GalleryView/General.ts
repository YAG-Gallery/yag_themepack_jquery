####################################################
# General Configuration of Gallery View
#
# @author Daniel Lienert <daniel@lienert.cc>
# @package YAG jQuery Themepack
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.galleryView {

	title  = GalleryView
	description = Uses GalleryView JQuery Plugin

	resolutionConfigs {
		medium >
		medium {
			width = 800c
			height = 500c
		}

		thumb >
		thumb {
			width = 60c
			height = 60c
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
		galleryView10 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/GalleryView/js/jquery.timers-1.2.js
		galleryView20 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/GalleryView/js/jquery.easing.1.3.js
		galleryView30 = EXT:yag_themepack_jquery/Resources/Public/GallerySource/GalleryView/js/jquery.galleryview-3.0-dev.js
	}

	includeCSS {
		galleryView = EXT:yag_themepack_jquery/Resources/Public/GallerySource/GalleryView/css/jquery.galleryview-3.0-dev.css
	}
	
	
	##
	## Configuration for gallery view
	##
	galleryViewSettings {

	#	transition_interval = 0
	#	transition_speed 	= 1000
	#	easing 				= 0

	#	pause_on_hover 		= false
	#	show_panels			= true
	#	panel_width			= 800
	#	panel_height		= 500
	#	panel_animation		= crossfade
	#	overlay_opacity		= 0.7
	#	overlay_position	= bottom
	#	panel_scale			= crop
	#	show_panel_nav		= true
	#	show_overlays		= true

	#	show_filmstrip		= true
		frame_width			= 60
		frame_height		= 60
	#	start_frame			= 1
	#	filmstrip_size		= 3
	#	frame_opacity		= 0.4
	#	filmstrip_style		= scroll
	#	filmstrip_position	= bottom
	#	show_filmstrip_nav	= true
	#	frame_gap			= 15
	#	frame_scale			= crop
	#	show_captions		= false

	#	pointer_size		= 0
	#	animate_pointer		= true
	}
}