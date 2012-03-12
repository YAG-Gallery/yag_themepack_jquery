####################################################
# Theme configuration root 
#
# @author Daniel Lienert <daniel@lienert.cc> Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.rondell < plugin.tx_yag.settings.themes.default

# Include General theme configuration
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:yag_themepack_jquery/Configuration/TypoScript/Themes/Rondell/General.ts">

# Include ImageList Definitions
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:yag_themepack_jquery/Configuration/TypoScript/Themes/Rondell/ItemList.ts">

module.tx_yag.settings.themes.rondell < plugin.tx_yag.settings.themes.rondell
module.tx_yag.settings.themes.rondellGallery < plugin.tx_yag.settings.themes.rondellGallery