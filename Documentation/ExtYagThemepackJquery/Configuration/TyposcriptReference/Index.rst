

.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. ==================================================
.. DEFINE SOME TEXTROLES
.. --------------------------------------------------
.. role::   underline
.. role::   typoscript(code)
.. role::   ts(typoscript)
   :class:  typoscript
.. role::   php(code)


TypoScript Reference
^^^^^^^^^^^^^^^^^^^^


GalleryView
"""""""""""

All parameters of galleryView can be set via Typoscript. They are
named like the javscript properties.

For a detailed description see: `http://spaceforaname.com/galleryview
<http://spaceforaname.com/galleryview>`_ .

These are the default settings:

plugin.tx\_yag.settings.themes.galleryView {

## Configuration for gallery view

transition\_interval = 0

transition\_speed = 1000

easing = 0

pause\_on\_hover = false

show\_panels = true

panel\_width = 800

panel\_height = 500

panel\_animation = crossfade

overlay\_opacity = 0.7

overlay\_position = bottom

panel\_scale = crop

show\_panel\_nav = true

show\_overlays = true

show\_filmstrip = true

frame\_width = 120

frame\_height = 80

start\_frame = 1

filmstrip\_size = 3

frame\_opacity = 0.5

filmstrip\_style = scroll

filmstrip\_position = bottom

show\_filmstrip\_nav = true

frame\_gap = 15

frame\_scale = crop

show\_captions = false

pointer\_size = 0

animate\_pointer = true

}


crossSlide
""""""""""

**plugin.tx\_yag.settings.themes.crossSlide.gallery**

Configuration that affects the whole gallery.

.. ### BEGIN~OF~TABLE ###

.. container:: table-row

   Property
         Property:
   
   Data type
         Data type:
   
   Description
         Description:
   
   Default
         Default:


.. container:: table-row

   Property
         canvasWidth
   
   Data type
         int
   
   Description
         Width of the div container holding the slideshow
   
   Default
         600


.. container:: table-row

   Property
         canvasHeight
   
   Data type
         int
   
   Description
         Height of the div container holding the slideshow
   
   Default
         300


.. container:: table-row

   Property
         fade
   
   Data type
         int
   
   Description
         Crossfade between images
   
   Default
         1


.. container:: table-row

   Property
         sleep
   
   Data type
         int
   
   Description
         Time in sconds to wait between the crossfades. If you aset a value for
         sleep, the image remain static between the crossfades.
   
   Default
         Not used


.. ###### END~OF~TABLE ######

**plugin.tx\_yag.settings.themes.crossSlide.image**

Configuration that affects a single image.

.. ### BEGIN~OF~TABLE ###

.. container:: table-row

   Property
         Property:
   
   Data type
         Data type:
   
   Description
         Description:
   
   Default
         Default:


.. container:: table-row

   Property
         pan.startX
   
   Data type
         int
   
   Description
         Horizontal start position of the image in percent.
   
   Default
         40


.. container:: table-row

   Property
         pan.stopX
   
   Data type
         int
   
   Description
         Horizontal end position of the image in percent.
   
   Default
         60


.. container:: table-row

   Property
         pan.startY
   
   Data type
         int
   
   Description
         Vertical start position of the image in percent.
   
   Default
         30


.. container:: table-row

   Property
         pan.stopY
   
   Data type
         int
   
   Description
         Vertical end position of the image in percent.
   
   Default
         50


.. container:: table-row

   Property
         pan.variance
   
   Data type
         int
   
   Description
         For every image, starX/Y and stopX/Y is adjusted by a random value in
         the range of +/- variance
   
   Default
         20


.. container:: table-row

   Property
         pan.alternate
   
   Data type
         int
   
   Description
         Alternate the direction of the panning with each image.
   
   Default
         1


.. container:: table-row

   Property
         zoom.start
   
   Data type
         float
   
   Description
         Start value of the magnification.
   
   Default
         1.0


.. container:: table-row

   Property
         zoom.stop
   
   Data type
         float
   
   Description
         End value of the magnification.
   
   Default
         1.3


.. container:: table-row

   Property
         zoom.variance
   
   Data type
         float
   
   Description
         For every image the start/stop magnification is adjusted by a random
         value in the range of +/- variance.
   
   Default
         0.3


.. container:: table-row

   Property
         alternate
   
   Data type
         int
   
   Description
         Alternate the direction of the zoomwith each image.
   
   Default
         1


.. container:: table-row

   Property
         time
   
   Data type
         int
   
   Description
         Duration of a pan/zoom/fade period in seconds.
   
   Default
         3


.. ###### END~OF~TABLE ######


Isotope
"""""""

Block size weighting configures the probability in which size an image
is rendered. Set the probability to zero if you do not want an image
be rendered in that size.

You can define the size and dimension of each resolution name in the
resolution configuration of this theme.

**plugin.tx\_yag.settings.themes.isotope.blockSizeWeighting**

.. ### BEGIN~OF~TABLE ###

.. container:: table-row

   Property
         Property:
   
   Data type
         Data type:
   
   Description
         Description:
   
   Default
         Default:


.. container:: table-row

   Property
         smallSquare
   
   Data type
         int
   
   Description
         Small square image
   
   Default
         40


.. container:: table-row

   Property
         bigSquare
   
   Data type
         int
   
   Description
         Big square image
   
   Default
         20


.. container:: table-row

   Property
         verticalLong
   
   Data type
         int
   
   Description
         Vertical image
   
   Default
         20


.. container:: table-row

   Property
         horizontalLong
   
   Data type
         int
   
   Description
         Horizontal image
   
   Default
         20


.. ###### END~OF~TABLE ######


Supersized
""""""""""

The settings are directly named after the javascript settings of the
supersized plugin. Please have a look at
`http://buildinternet.com/project/supersized/docs.html
<http://buildinternet.com/project/supersized/docs.html>`_ for a full
documentation.

superSizedSettings {

// General

slideshow = 1

autoplay = 1

start\_slide = 1

stop\_loop = 0

random = 0

slide\_interval = 3000

transition = 1

transition\_speed = 1000

new\_window = 1

pause\_hover = 0

keyboard\_nav = 1

performance = 2

image\_protect = 1

image\_path = EXT:yag\_themepack\_jquery/Resources/Public/GallerySourc
e/SuperSized/slideshow/img/

//Size & Position

min\_width = 1024

min\_height = 768

vertical\_center = 1

horizontal\_center = 1

fit\_portrait = 1

fit\_landscape = 0

fit\_always = 0

//Components

slide\_links = blank

thumb\_links = 1

navigation = 1

thumbnail\_navigation = 0

slide\_counter = 1

slide\_captions = 1

progress\_bar = 1

mouse\_scrub = 0

}


NivoSlider
""""""""""

The NivoSlider is a tiny imageSlider with many different slide
animations and and an optional thumbnail navigation.

**plugin.tx\_yag.settings.themes.nivoSlider.nivoSliderSettings**

.. ### BEGIN~OF~TABLE ###

.. container:: table-row

   Property
         Property:
   
   Data type
         Data type:
   
   Description
         Description:
   
   Default
         Default:


.. container:: table-row

   Property
         effect
   
   Data type
         string
   
   Description
         One of these: sliceDown,sliceDownLeft,sliceUp,sliceUpLeft,sliceUpDown,
         sliceUpDownLeft,fold,fade,random,slideInRight,slideInLeft,boxRandom,bo
         xRain,boxRainReverse,boxRainGrow,boxRainGrowReverse
   
   Default
         random


.. container:: table-row

   Property
         slices
   
   Data type
         int
   
   Description
         For slice animations
   
   Default
         15


.. container:: table-row

   Property
         boxCols
   
   Data type
         int
   
   Description
         For box animations
   
   Default
         15


.. container:: table-row

   Property
         boxRows
   
   Data type
         int
   
   Description
         For box animations
   
   Default
         4


.. container:: table-row

   Property
         animSpeed
   
   Data type
         int
   
   Description
         Slide transition speed
   
   Default
         500


.. container:: table-row

   Property
         pauseTime
   
   Data type
         int
   
   Description
         How long each slide will show
   
   Default
         3000


.. container:: table-row

   Property
         startSlide
   
   Data type
         int
   
   Description
         Set starting Slide (0 index)
   
   Default
         0


.. container:: table-row

   Property
         directionNav
   
   Data type
         boolean
   
   Description
         Next & Prev navigation
   
   Default
         true


.. container:: table-row

   Property
         directionNavHide
   
   Data type
         boolean
   
   Description
         Only show on hover
   
   Default
         true


.. container:: table-row

   Property
         controlNav
   
   Data type
         boolean
   
   Description
         1,2,3... navigation
   
   Default
         true


.. container:: table-row

   Property
         controlNavThumbs
   
   Data type
         boolean
   
   Description
         Use thumbnails for Control Nav
   
   Default
         false


.. container:: table-row

   Property
         keyboardNav
   
   Data type
         boolean
   
   Description
         Use left & right arrows
   
   Default
         true


.. container:: table-row

   Property
         pauseOnHover
   
   Data type
         boolean
   
   Description
         Stop animation while hovering
   
   Default
         true


.. container:: table-row

   Property
         manualAdvance
   
   Data type
         boolean
   
   Description
         Force manual transitions
   
   Default
         true


.. container:: table-row

   Property
         captionOpacity
   
   Data type
         float
   
   Description
         Universal caption opacity
   
   Default
         0.8


.. container:: table-row

   Property
         randomStart
   
   Data type
         boolean
   
   Description
         Start on a random slide
   
   Default
         false


.. ###### END~OF~TABLE ######


jQuery Rondell
""""""""""""""

Currently only presets are supported and forwarded to the template. If
you need further configuration options, feel free to alter the
javascript template in
Resources/Private/Templates/Rondell/JSTemplates/Rondell.js

*plugin.tx\_yag.settings.themes.rondell.rondellSettings.*

.. ### BEGIN~OF~TABLE ###

.. container:: table-row

   Property
         Property:
   
   Data type
         Data type:
   
   Description
         Description:
   
   Default
         Default:


.. container:: table-row

   Property
         preset
   
   Data type
         string
   
   Description
         Gallery Preset. In this version also available are:
         
         - carousel
         
         - slider
         
         - products
   
   Default
         Carousel


.. ###### END~OF~TABLE ######


Galleria.io
"""""""""""

The galkeria script comes with its own theming system. The default
theme “classic” is free of charge and included into the the extension.
You can also purchase more advanced themes on their website
(http://www.galleria.io).

plugin.tx\_yag.settings.themes.galleria.galleriaSettings

.. ### BEGIN~OF~TABLE ###

.. container:: table-row

   Property
         Property:
   
   Data type
         Data type:
   
   Description
         Description:
   
   Default
         Default:


.. container:: table-row

   Property
         themeBasePath
   
   Data type
         string
   
   Description
         Basepath to the gallery theme directory. If you have purchased one of
         the more advanced themes of galleria.io, upload this theme to a theme
         directory on your sever and point the themeBasePath to this directory.
   
   Default
         typo3conf/ext/yag\_themepack\_jquery/Resources/Public/GallerySource/Ga
         lleria/src/themes/


.. container:: table-row

   Property
         theme
   
   Data type
         string
   
   Description
         Select a theme from the directory configured with themeBasePath
   
   Default
         Classic


.. container:: table-row

   Property
         width
   
   Data type
         String
   
   Description
         Width of the galleria frame
   
   Default
         800


.. container:: table-row

   Property
         height
   
   Data type
         String
   
   Description
         Height of the galleria frame
   
   Default
         370


.. container:: table-row

   Property
         jsonMode
   
   Data type
         Integer
   
   Description
         If set to 1, the image data is rendered as JSON array
   
   Default
         0


.. ###### END~OF~TABLE ######

