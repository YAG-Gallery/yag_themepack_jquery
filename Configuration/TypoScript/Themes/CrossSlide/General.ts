####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc> Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.crossSlide {

	title = CrossSlide (Simple Crossfade)
	description = Uses JQuery CrossSlide to slide the images.
	
	resolutionConfigs {
		medium >
		medium {
			width = 800
		}
	}
	
	controller {
		ItemList {
			list.template = EXT:yag_themepack_jquery/Resources/Private/Templates/CrossSlide/ItemList/List.html
		}
	}
	
	includeLibJS = jQuery
	includeLibCSS = 
	
	includeJS {
		crossSlide = EXT:yag_themepack_jquery/Resources/Public/GallerySource/CrossSlide/jquery.cross-slide.min.js
	}


	# --------------------
	# CrossSlide Settings
	# --------------------
	
	crossSlide {	
		
		#Gallery Settings
		gallery {
			canvasWidth = 600
			canvasHeight = 300
			
			sleep = 2
			fade = 1
		}
	}
}

plugin.tx_yag.settings.themes.crossSlideKenBurns < plugin.tx_yag.settings.themes.crossSlide
plugin.tx_yag.settings.themes.crossSlideKenBurns {

	title = CrossSlide (Ken Burns Effect)
	description = Uses JQuery CrossSlide to show a Ken Burns Effect (pan and zoom images)

	# --------------------
	# CrossSlide Settings
	# --------------------
	
	crossSlide {
	
		# Imasge Settings
		image {
			pan {
				startX = 40
				stopX = 60
				
				startY = 30
				stopY = 60
				
				variance = 20
				alternate = 1
			}
			
			zoom {
				start = 1.0
				stop = 1.3
				
				variance = 0.3
				alternate = 1
			}
			time = 3			
		}
		
		
		#Gallery Settings
		gallery {
			canvasWidth = 600
			canvasHeight = 300
			
			sleep = 
			fade = 1
		}
	}
}
