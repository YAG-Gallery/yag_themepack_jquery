####################################################
# Theme configuration root 
#
# @author Daniel Lienert <daniel@lienert.cc> Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.galleryView < plugin.tx_yag.settings.themes.default

# Include General theme configuration
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:yag_themepack_jquery/Configuration/TypoScript/Themes/GalleryView/General.ts">

# Include ImageList Definitions
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:yag_themepack_jquery/Configuration/TypoScript/Themes/GalleryView/ItemList.ts">