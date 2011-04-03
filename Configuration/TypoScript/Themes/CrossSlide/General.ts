####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc> Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.crossSlide {
	
	resolutionConfigs {
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
	
	includeCSS >

	# --------------------
	# CrossSlide Settings
	# --------------------
	
	crossSlide {	
		# Imasge Settings
		image {
			
			pan {
				startX = 60
				stopX = 40
				
				startY = 50
				stopY = 30
				
				variance = 10
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
			fade = 1
		}
	}
}