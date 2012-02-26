####################################################
# Theme configuration root 
#
# @author Daniel Lienert <daniel@lienert.cc>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.galleriffic < plugin.tx_yag.settings.themes.default

# Include General theme configuration
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:yag_themepack_jquery/Configuration/TypoScript/Themes/Galleriffic/General.ts">

# Include ImageList Definitions
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:yag_themepack_jquery/Configuration/TypoScript/Themes/Galleriffic/ItemList.ts">

# Include item settings
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:yag_themepack_jquery/Configuration/TypoScript/Themes/Galleriffic/Item.ts">