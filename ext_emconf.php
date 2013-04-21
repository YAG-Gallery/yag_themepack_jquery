<?php

########################################################################
# Extension Manager/Repository config file for ext "yag_themepack_jquery".
#
# Auto generated 10-04-2012 21:40
#
# Manual updates:
# Only the data in the array - everything else is removed by next
# writing. "version" and "dependencies" must not be touched!
########################################################################

$EM_CONF[$_EXTKEY] = array(
	'title' => 'YAG Themepack jQuery',
	'description' => 'Collection of jQuery based themes for YAG. Scripts included: galleryView, crossSlide, superSized and isotope. See http://www.yag-gallery.de/examples/ for a demonstration.',
	'category' => 'plugin',
	'author' => 'Daniel Lienert',
	'author_email' => 'daniel@lienert.cc',
	'author_company' => '',
	'shy' => '',
	'dependencies' => 'cms,extbase,fluid,yag',
	'conflicts' => '',
	'priority' => '',
	'module' => '',
	'state' => 'stable',
	'internal' => '',
	'uploadfolder' => 0,
	'createDirs' => '',
	'modify_tables' => '',
	'clearCacheOnLoad' => 0,
	'lockType' => '',
	'version' => '1.0.0',
	'constraints' => array(
		'depends' => array(
			'typo3' => '4.5.0-6.0.99',
			'extbase' => '',
			'fluid' => '',
			'yag' => '2.3.0',
		),
		'conflicts' => array(
		),
		'suggests' => array(
		),
	),
	'suggests' => array(
	),
	'_md5_values_when_last_written' => 'a:255:{s:12:"ext_icon.gif";s:4:"fb70";s:17:"ext_localconf.php";s:4:"c8ba";s:14:"ext_tables.php";s:4:"71ad";s:14:"ext_tables.sql";s:4:"d41d";s:44:"Classes/ViewHelpers/CrossSlideViewHelper.php";s:4:"fb73";s:44:"Classes/ViewHelpers/NivoSliderViewHelper.php";s:4:"3b09";s:44:"Classes/ViewHelpers/SuperSizedViewHelper.php";s:4:"d01e";s:51:"Classes/ViewHelpers/Isotope/ImageListViewHelper.php";s:4:"f735";s:49:"Classes/ViewHelpers/Isotope/TagListViewHelper.php";s:4:"6f30";s:38:"Configuration/TypoScript/constants.txt";s:4:"3f95";s:34:"Configuration/TypoScript/setup.txt";s:4:"22ec";s:53:"Configuration/TypoScript/Themes/CrossSlide/General.ts";s:4:"f0a9";s:54:"Configuration/TypoScript/Themes/CrossSlide/ItemList.ts";s:4:"5825";s:51:"Configuration/TypoScript/Themes/CrossSlide/Theme.ts";s:4:"885f";s:54:"Configuration/TypoScript/Themes/GalleryView/General.ts";s:4:"e134";s:55:"Configuration/TypoScript/Themes/GalleryView/ItemList.ts";s:4:"23b2";s:52:"Configuration/TypoScript/Themes/GalleryView/Theme.ts";s:4:"22d0";s:50:"Configuration/TypoScript/Themes/Isotope/General.ts";s:4:"f57a";s:51:"Configuration/TypoScript/Themes/Isotope/ItemList.ts";s:4:"6016";s:48:"Configuration/TypoScript/Themes/Isotope/Theme.ts";s:4:"003e";s:53:"Configuration/TypoScript/Themes/NivoSlider/General.ts";s:4:"d73d";s:54:"Configuration/TypoScript/Themes/NivoSlider/ItemList.ts";s:4:"db8a";s:51:"Configuration/TypoScript/Themes/NivoSlider/Theme.ts";s:4:"f47f";s:50:"Configuration/TypoScript/Themes/Rondell/General.ts";s:4:"b888";s:51:"Configuration/TypoScript/Themes/Rondell/ItemList.ts";s:4:"db8a";s:48:"Configuration/TypoScript/Themes/Rondell/Theme.ts";s:4:"c1e5";s:53:"Configuration/TypoScript/Themes/SuperSized/General.ts";s:4:"2db2";s:54:"Configuration/TypoScript/Themes/SuperSized/ItemList.ts";s:4:"034a";s:51:"Configuration/TypoScript/Themes/SuperSized/Theme.ts";s:4:"b8dc";s:46:"Configuration/TypoScript/Widgets/CrossSlide.ts";s:4:"13f4";s:40:"Resources/Private/Language/locallang.xml";s:4:"fc6b";s:43:"Resources/Private/Language/locallang_db.xml";s:4:"046a";s:57:"Resources/Private/Templates/CrossSlide/ItemList/List.html";s:4:"ae98";s:58:"Resources/Private/Templates/GalleryView/ItemList/List.html";s:4:"3f54";s:66:"Resources/Private/Templates/GalleryView/JSTemplates/GalleryView.js";s:4:"b10b";s:54:"Resources/Private/Templates/Isotope/ItemList/List.html";s:4:"3b40";s:58:"Resources/Private/Templates/Isotope/JSTemplates/Isotope.js";s:4:"a427";s:57:"Resources/Private/Templates/NivoSlider/ItemList/List.html";s:4:"c4a9";s:54:"Resources/Private/Templates/Rondell/ItemList/List.html";s:4:"ae17";s:58:"Resources/Private/Templates/Rondell/JSTemplates/Rondell.js";s:4:"8bc8";s:57:"Resources/Private/Templates/SuperSized/ItemList/List.html";s:4:"b34b";s:32:"Resources/Public/CSS/Isotope.css";s:4:"1c70";s:32:"Resources/Public/CSS/Rondell.css";s:4:"7b5b";s:35:"Resources/Public/CSS/SuperSized.css";s:4:"1ec4";s:44:"Resources/Public/CSS/NivoSlider/ThumbNav.css";s:4:"4028";s:67:"Resources/Public/GallerySource/CrossSlide/jquery.cross-slide.min.js";s:4:"2607";s:53:"Resources/Public/GallerySource/GalleryView/README.txt";s:4:"08c8";s:61:"Resources/Public/GallerySource/GalleryView/css/img-loader.gif";s:4:"4ae6";s:85:"Resources/Public/GallerySource/GalleryView/css/jquery.galleryview-3.0-dev-panning.css";s:4:"6a42";s:84:"Resources/Public/GallerySource/GalleryView/css/jquery.galleryview-3.0-dev-slider.css";s:4:"b59c";s:77:"Resources/Public/GallerySource/GalleryView/css/jquery.galleryview-3.0-dev.css";s:4:"d3e9";s:57:"Resources/Public/GallerySource/GalleryView/css/loader.gif";s:4:"c420";s:64:"Resources/Public/GallerySource/GalleryView/css/_notes/dwsync.xml";s:4:"0edb";s:67:"Resources/Public/GallerySource/GalleryView/css/themes/dark/next.png";s:4:"cd2b";s:73:"Resources/Public/GallerySource/GalleryView/css/themes/dark/panel-next.png";s:4:"cd2b";s:73:"Resources/Public/GallerySource/GalleryView/css/themes/dark/panel-prev.png";s:4:"6916";s:68:"Resources/Public/GallerySource/GalleryView/css/themes/dark/pause.png";s:4:"266d";s:67:"Resources/Public/GallerySource/GalleryView/css/themes/dark/play.png";s:4:"76a9";s:67:"Resources/Public/GallerySource/GalleryView/css/themes/dark/prev.png";s:4:"6916";s:76:"Resources/Public/GallerySource/GalleryView/css/themes/dark/_notes/dwsync.xml";s:4:"c6e7";s:68:"Resources/Public/GallerySource/GalleryView/css/themes/dark2/next.png";s:4:"8e74";s:78:"Resources/Public/GallerySource/GalleryView/css/themes/dark2/panel-next-big.png";s:4:"52c4";s:74:"Resources/Public/GallerySource/GalleryView/css/themes/dark2/panel-next.png";s:4:"8e74";s:78:"Resources/Public/GallerySource/GalleryView/css/themes/dark2/panel-prev-big.png";s:4:"27d6";s:74:"Resources/Public/GallerySource/GalleryView/css/themes/dark2/panel-prev.png";s:4:"bfaa";s:73:"Resources/Public/GallerySource/GalleryView/css/themes/dark2/pause-big.png";s:4:"247e";s:69:"Resources/Public/GallerySource/GalleryView/css/themes/dark2/pause.png";s:4:"b335";s:72:"Resources/Public/GallerySource/GalleryView/css/themes/dark2/play-big.png";s:4:"c6c8";s:68:"Resources/Public/GallerySource/GalleryView/css/themes/dark2/play.png";s:4:"cb74";s:68:"Resources/Public/GallerySource/GalleryView/css/themes/dark2/prev.png";s:4:"bfaa";s:77:"Resources/Public/GallerySource/GalleryView/css/themes/dark2/_notes/dwsync.xml";s:4:"f430";s:68:"Resources/Public/GallerySource/GalleryView/css/themes/light/next.png";s:4:"fddf";s:74:"Resources/Public/GallerySource/GalleryView/css/themes/light/panel-next.png";s:4:"fddf";s:74:"Resources/Public/GallerySource/GalleryView/css/themes/light/panel-prev.png";s:4:"0ad7";s:69:"Resources/Public/GallerySource/GalleryView/css/themes/light/pause.png";s:4:"0337";s:68:"Resources/Public/GallerySource/GalleryView/css/themes/light/play.png";s:4:"0112";s:68:"Resources/Public/GallerySource/GalleryView/css/themes/light/prev.png";s:4:"0ad7";s:77:"Resources/Public/GallerySource/GalleryView/css/themes/light/_notes/dwsync.xml";s:4:"15d3";s:69:"Resources/Public/GallerySource/GalleryView/css/themes/light2/info.png";s:4:"52e2";s:69:"Resources/Public/GallerySource/GalleryView/css/themes/light2/next.png";s:4:"0d1d";s:79:"Resources/Public/GallerySource/GalleryView/css/themes/light2/panel-next-big.png";s:4:"95c0";s:75:"Resources/Public/GallerySource/GalleryView/css/themes/light2/panel-next.png";s:4:"0d1d";s:79:"Resources/Public/GallerySource/GalleryView/css/themes/light2/panel-prev-big.png";s:4:"308a";s:75:"Resources/Public/GallerySource/GalleryView/css/themes/light2/panel-prev.png";s:4:"6d0e";s:74:"Resources/Public/GallerySource/GalleryView/css/themes/light2/pause-big.png";s:4:"74a6";s:70:"Resources/Public/GallerySource/GalleryView/css/themes/light2/pause.png";s:4:"8310";s:73:"Resources/Public/GallerySource/GalleryView/css/themes/light2/play-big.png";s:4:"3ba6";s:69:"Resources/Public/GallerySource/GalleryView/css/themes/light2/play.png";s:4:"f460";s:69:"Resources/Public/GallerySource/GalleryView/css/themes/light2/prev.png";s:4:"6d0e";s:78:"Resources/Public/GallerySource/GalleryView/css/themes/light2/_notes/dwsync.xml";s:4:"96dc";s:66:"Resources/Public/GallerySource/GalleryView/js/jquery.easing.1.3.js";s:4:"6516";s:75:"Resources/Public/GallerySource/GalleryView/js/jquery.galleryview-3.0-dev.js";s:4:"9418";s:66:"Resources/Public/GallerySource/GalleryView/js/jquery.timers-1.2.js";s:4:"9762";s:63:"Resources/Public/GallerySource/GalleryView/js/_notes/dwsync.xml";s:4:"91ff";s:51:"Resources/Public/GallerySource/Isotope/README.mdown";s:4:"fb86";s:49:"Resources/Public/GallerySource/Isotope/index.html";s:4:"3584";s:56:"Resources/Public/GallerySource/Isotope/jquery.isotope.js";s:4:"4b76";s:60:"Resources/Public/GallerySource/Isotope/jquery.isotope.min.js";s:4:"1bfc";s:52:"Resources/Public/GallerySource/Isotope/css/style.css";s:4:"9d39";s:57:"Resources/Public/GallerySource/Isotope/js/fake-element.js";s:4:"f2ab";s:61:"Resources/Public/GallerySource/Isotope/js/jquery-1.7.1.min.js";s:4:"4bab";s:62:"Resources/Public/GallerySource/Isotope/js/jquery.ba-bbq.min.js";s:4:"07c7";s:70:"Resources/Public/GallerySource/Isotope/js/jquery.infinitescroll.min.js";s:4:"ed1c";s:68:"Resources/Public/GallerySource/Isotope/js/make-big-graph-projects.js";s:4:"a360";s:48:"Resources/Public/GallerySource/NivoSlider/README";s:4:"becc";s:63:"Resources/Public/GallerySource/NivoSlider/jquery.nivo.slider.js";s:4:"7fc8";s:68:"Resources/Public/GallerySource/NivoSlider/jquery.nivo.slider.pack.js";s:4:"829e";s:53:"Resources/Public/GallerySource/NivoSlider/license.txt";s:4:"221d";s:57:"Resources/Public/GallerySource/NivoSlider/nivo-slider.css";s:4:"8e64";s:56:"Resources/Public/GallerySource/NivoSlider/demo/demo.html";s:4:"aeb7";s:57:"Resources/Public/GallerySource/NivoSlider/demo/demo2.html";s:4:"ad8a";s:56:"Resources/Public/GallerySource/NivoSlider/demo/style.css";s:4:"2be3";s:66:"Resources/Public/GallerySource/NivoSlider/demo/images/dev7logo.png";s:4:"0306";s:62:"Resources/Public/GallerySource/NivoSlider/demo/images/nemo.jpg";s:4:"7ea9";s:66:"Resources/Public/GallerySource/NivoSlider/demo/images/toystory.jpg";s:4:"7843";s:60:"Resources/Public/GallerySource/NivoSlider/demo/images/up.jpg";s:4:"97a8";s:63:"Resources/Public/GallerySource/NivoSlider/demo/images/walle.jpg";s:4:"0e44";s:74:"Resources/Public/GallerySource/NivoSlider/demo/scripts/jquery-1.6.4.min.js";s:4:"9118";s:67:"Resources/Public/GallerySource/NivoSlider/themes/default/arrows.png";s:4:"09b2";s:68:"Resources/Public/GallerySource/NivoSlider/themes/default/bullets.png";s:4:"acc6";s:68:"Resources/Public/GallerySource/NivoSlider/themes/default/default.css";s:4:"fb40";s:68:"Resources/Public/GallerySource/NivoSlider/themes/default/loading.gif";s:4:"dd6b";s:65:"Resources/Public/GallerySource/NivoSlider/themes/orman/arrows.png";s:4:"1429";s:66:"Resources/Public/GallerySource/NivoSlider/themes/orman/bullets.png";s:4:"637a";s:66:"Resources/Public/GallerySource/NivoSlider/themes/orman/loading.gif";s:4:"c339";s:64:"Resources/Public/GallerySource/NivoSlider/themes/orman/orman.css";s:4:"2c3e";s:65:"Resources/Public/GallerySource/NivoSlider/themes/orman/readme.txt";s:4:"9f9f";s:65:"Resources/Public/GallerySource/NivoSlider/themes/orman/ribbon.png";s:4:"9972";s:65:"Resources/Public/GallerySource/NivoSlider/themes/orman/slider.png";s:4:"88e0";s:67:"Resources/Public/GallerySource/NivoSlider/themes/pascal/bullets.png";s:4:"8680";s:70:"Resources/Public/GallerySource/NivoSlider/themes/pascal/controlnav.png";s:4:"47f7";s:68:"Resources/Public/GallerySource/NivoSlider/themes/pascal/featured.png";s:4:"dd34";s:67:"Resources/Public/GallerySource/NivoSlider/themes/pascal/loading.gif";s:4:"c339";s:66:"Resources/Public/GallerySource/NivoSlider/themes/pascal/pascal.css";s:4:"6250";s:66:"Resources/Public/GallerySource/NivoSlider/themes/pascal/readme.txt";s:4:"db93";s:66:"Resources/Public/GallerySource/NivoSlider/themes/pascal/ribbon.png";s:4:"dd34";s:66:"Resources/Public/GallerySource/NivoSlider/themes/pascal/slider.png";s:4:"54d9";s:47:"Resources/Public/GallerySource/Rondell/Cakefile";s:4:"ec64";s:48:"Resources/Public/GallerySource/Rondell/README.md";s:4:"eb65";s:49:"Resources/Public/GallerySource/Rondell/index.html";s:4:"340d";s:51:"Resources/Public/GallerySource/Rondell/package.json";s:4:"ee63";s:61:"Resources/Public/GallerySource/Rondell/css/jquery.rondell.css";s:4:"50f8";s:53:"Resources/Public/GallerySource/Rondell/css/screen.css";s:4:"8e17";s:61:"Resources/Public/GallerySource/Rondell/examples/carousel.html";s:4:"644f";s:60:"Resources/Public/GallerySource/Rondell/examples/gallery.html";s:4:"b949";s:65:"Resources/Public/GallerySource/Rondell/examples/installation.html";s:4:"cd77";s:60:"Resources/Public/GallerySource/Rondell/examples/options.html";s:4:"6d6d";s:58:"Resources/Public/GallerySource/Rondell/examples/pages.html";s:4:"2ae2";s:59:"Resources/Public/GallerySource/Rondell/examples/preview.png";s:4:"5213";s:61:"Resources/Public/GallerySource/Rondell/examples/scroller.html";s:4:"deac";s:59:"Resources/Public/GallerySource/Rondell/examples/slider.html";s:4:"3e1b";s:63:"Resources/Public/GallerySource/Rondell/examples/thumbnails.html";s:4:"a2f1";s:70:"Resources/Public/GallerySource/Rondell/examples/images/galery/band.jpg";s:4:"2ed1";s:70:"Resources/Public/GallerySource/Rondell/examples/images/galery/boar.jpg";s:4:"df44";s:69:"Resources/Public/GallerySource/Rondell/examples/images/galery/cat.jpg";s:4:"5bed";s:69:"Resources/Public/GallerySource/Rondell/examples/images/galery/dog.jpg";s:4:"4eee";s:72:"Resources/Public/GallerySource/Rondell/examples/images/galery/rabbit.jpg";s:4:"9887";s:70:"Resources/Public/GallerySource/Rondell/examples/images/galery/snow.jpg";s:4:"ab5a";s:71:"Resources/Public/GallerySource/Rondell/examples/images/galery/trash.jpg";s:4:"3756";s:73:"Resources/Public/GallerySource/Rondell/examples/images/page/mountains.png";s:4:"f117";s:72:"Resources/Public/GallerySource/Rondell/examples/images/page/ranseier.jpg";s:4:"c170";s:69:"Resources/Public/GallerySource/Rondell/examples/images/page/water.png";s:4:"83bb";s:74:"Resources/Public/GallerySource/Rondell/examples/images/products/client.png";s:4:"a8c0";s:75:"Resources/Public/GallerySource/Rondell/examples/images/products/client2.png";s:4:"9f72";s:75:"Resources/Public/GallerySource/Rondell/examples/images/products/client3.png";s:4:"5e28";s:73:"Resources/Public/GallerySource/Rondell/examples/images/products/cloud.png";s:4:"a0ed";s:74:"Resources/Public/GallerySource/Rondell/examples/images/products/router.png";s:4:"b6e4";s:75:"Resources/Public/GallerySource/Rondell/examples/images/products/unknown.png";s:4:"826d";s:70:"Resources/Public/GallerySource/Rondell/examples/images/slider/pic1.png";s:4:"ae89";s:70:"Resources/Public/GallerySource/Rondell/examples/images/slider/pic2.png";s:4:"21ea";s:70:"Resources/Public/GallerySource/Rondell/examples/images/slider/pic3.png";s:4:"44ca";s:70:"Resources/Public/GallerySource/Rondell/examples/images/slider/pic4.png";s:4:"7d95";s:56:"Resources/Public/GallerySource/Rondell/images/arrows.png";s:4:"3f97";s:52:"Resources/Public/GallerySource/Rondell/images/bg.png";s:4:"2d4f";s:57:"Resources/Public/GallerySource/Rondell/images/buttons.png";s:4:"e9b3";s:58:"Resources/Public/GallerySource/Rondell/images/fancybox.png";s:4:"11e5";s:56:"Resources/Public/GallerySource/Rondell/images/loader.gif";s:4:"d2be";s:56:"Resources/Public/GallerySource/Rondell/js/demohelpers.js";s:4:"18e2";s:61:"Resources/Public/GallerySource/Rondell/js/jquery-1.7.1.min.js";s:4:"ddb8";s:71:"Resources/Public/GallerySource/Rondell/js/jquery.fancybox-1.3.4.pack.js";s:4:"8bc3";s:72:"Resources/Public/GallerySource/Rondell/js/jquery.mousewheel-3.0.6.min.js";s:4:"7e49";s:59:"Resources/Public/GallerySource/Rondell/js/jquery.rondell.js";s:4:"2156";s:64:"Resources/Public/GallerySource/Rondell/js/modernizr-2.0.6.min.js";s:4:"fcc3";s:71:"Resources/Public/GallerySource/Rondell/src/coffee/jquery.rondell.coffee";s:4:"ff34";s:64:"Resources/Public/GallerySource/Rondell/src/coffee/presets.coffee";s:4:"54f9";s:61:"Resources/Public/GallerySource/Rondell/src/jade/carousel.jade";s:4:"6aae";s:60:"Resources/Public/GallerySource/Rondell/src/jade/gallery.jade";s:4:"2943";s:58:"Resources/Public/GallerySource/Rondell/src/jade/index.jade";s:4:"120a";s:65:"Resources/Public/GallerySource/Rondell/src/jade/installation.jade";s:4:"9ffa";s:60:"Resources/Public/GallerySource/Rondell/src/jade/options.jade";s:4:"7d38";s:58:"Resources/Public/GallerySource/Rondell/src/jade/pages.jade";s:4:"1e2f";s:61:"Resources/Public/GallerySource/Rondell/src/jade/scroller.jade";s:4:"839c";s:59:"Resources/Public/GallerySource/Rondell/src/jade/slider.jade";s:4:"619d";s:63:"Resources/Public/GallerySource/Rondell/src/jade/thumbnails.jade";s:4:"ade8";s:68:"Resources/Public/GallerySource/Rondell/src/jade/includes/layout.jade";s:4:"5cd5";s:69:"Resources/Public/GallerySource/Rondell/src/jade/includes/submenu.jade";s:4:"d084";s:58:"Resources/Public/GallerySource/Rondell/src/scss/_base.scss";s:4:"230e";s:60:"Resources/Public/GallerySource/Rondell/src/scss/_mixins.scss";s:4:"7639";s:60:"Resources/Public/GallerySource/Rondell/src/scss/_themes.scss";s:4:"666a";s:67:"Resources/Public/GallerySource/Rondell/src/scss/jquery.rondell.scss";s:4:"809c";s:59:"Resources/Public/GallerySource/Rondell/src/scss/screen.scss";s:4:"2f7d";s:57:"Resources/Public/GallerySource/SuperSized/GPL-LICENSE.txt";s:4:"7bac";s:57:"Resources/Public/GallerySource/SuperSized/MIT-LICENSE.txt";s:4:"caa8";s:51:"Resources/Public/GallerySource/SuperSized/README.md";s:4:"381b";s:56:"Resources/Public/GallerySource/SuperSized/core/core.html";s:4:"af68";s:58:"Resources/Public/GallerySource/SuperSized/core/random.html";s:4:"75e9";s:70:"Resources/Public/GallerySource/SuperSized/core/css/supersized.core.css";s:4:"36d1";s:63:"Resources/Public/GallerySource/SuperSized/core/img/bg-black.png";s:4:"7798";s:63:"Resources/Public/GallerySource/SuperSized/core/img/progress.gif";s:4:"db34";s:70:"Resources/Public/GallerySource/SuperSized/core/img/supersized-logo.png";s:4:"57b4";s:74:"Resources/Public/GallerySource/SuperSized/core/js/supersized.core.3.2.1.js";s:4:"10cc";s:78:"Resources/Public/GallerySource/SuperSized/core/js/supersized.core.3.2.1.min.js";s:4:"2271";s:60:"Resources/Public/GallerySource/SuperSized/flickr/flickr.html";s:4:"b1ca";s:67:"Resources/Public/GallerySource/SuperSized/flickr/css/supersized.css";s:4:"8c55";s:61:"Resources/Public/GallerySource/SuperSized/flickr/img/back.png";s:4:"d9c0";s:66:"Resources/Public/GallerySource/SuperSized/flickr/img/back_dull.png";s:4:"4009";s:75:"Resources/Public/GallerySource/SuperSized/flickr/img/buildinternet-logo.png";s:4:"102e";s:64:"Resources/Public/GallerySource/SuperSized/flickr/img/forward.png";s:4:"0a32";s:69:"Resources/Public/GallerySource/SuperSized/flickr/img/forward_dull.png";s:4:"1187";s:63:"Resources/Public/GallerySource/SuperSized/flickr/img/nav-bg.png";s:4:"6551";s:62:"Resources/Public/GallerySource/SuperSized/flickr/img/pause.png";s:4:"56c6";s:67:"Resources/Public/GallerySource/SuperSized/flickr/img/pause_dull.png";s:4:"05fd";s:66:"Resources/Public/GallerySource/SuperSized/flickr/img/play_dull.png";s:4:"56d0";s:65:"Resources/Public/GallerySource/SuperSized/flickr/img/progress.gif";s:4:"db34";s:72:"Resources/Public/GallerySource/SuperSized/flickr/img/supersized-logo.png";s:4:"57b4";s:78:"Resources/Public/GallerySource/SuperSized/flickr/js/supersized.flickr.1.1.2.js";s:4:"3c8c";s:61:"Resources/Public/GallerySource/SuperSized/slideshow/demo.html";s:4:"9fea";s:61:"Resources/Public/GallerySource/SuperSized/slideshow/fade.html";s:4:"3c8d";s:62:"Resources/Public/GallerySource/SuperSized/slideshow/slide.html";s:4:"e4eb";s:70:"Resources/Public/GallerySource/SuperSized/slideshow/css/supersized.css";s:4:"d808";s:64:"Resources/Public/GallerySource/SuperSized/slideshow/img/back.png";s:4:"d3a5";s:68:"Resources/Public/GallerySource/SuperSized/slideshow/img/bg-black.png";s:4:"7798";s:68:"Resources/Public/GallerySource/SuperSized/slideshow/img/bg-hover.png";s:4:"761a";s:76:"Resources/Public/GallerySource/SuperSized/slideshow/img/button-tray-down.png";s:4:"eef3";s:74:"Resources/Public/GallerySource/SuperSized/slideshow/img/button-tray-up.png";s:4:"b0cb";s:67:"Resources/Public/GallerySource/SuperSized/slideshow/img/forward.png";s:4:"8a82";s:66:"Resources/Public/GallerySource/SuperSized/slideshow/img/nav-bg.png";s:4:"7bac";s:67:"Resources/Public/GallerySource/SuperSized/slideshow/img/nav-dot.png";s:4:"88ff";s:65:"Resources/Public/GallerySource/SuperSized/slideshow/img/pause.png";s:4:"2b94";s:64:"Resources/Public/GallerySource/SuperSized/slideshow/img/play.png";s:4:"3579";s:73:"Resources/Public/GallerySource/SuperSized/slideshow/img/progress-back.png";s:4:"b1f5";s:72:"Resources/Public/GallerySource/SuperSized/slideshow/img/progress-bar.png";s:4:"3358";s:68:"Resources/Public/GallerySource/SuperSized/slideshow/img/progress.gif";s:4:"db34";s:75:"Resources/Public/GallerySource/SuperSized/slideshow/img/supersized-logo.png";s:4:"57b4";s:70:"Resources/Public/GallerySource/SuperSized/slideshow/img/thumb-back.png";s:4:"15ad";s:73:"Resources/Public/GallerySource/SuperSized/slideshow/img/thumb-forward.png";s:4:"e4d1";s:75:"Resources/Public/GallerySource/SuperSized/slideshow/js/jquery.easing.min.js";s:4:"ec64";s:74:"Resources/Public/GallerySource/SuperSized/slideshow/js/supersized.3.2.6.js";s:4:"88d8";s:78:"Resources/Public/GallerySource/SuperSized/slideshow/js/supersized.3.2.6.min.js";s:4:"9fce";s:80:"Resources/Public/GallerySource/SuperSized/slideshow/theme/supersized.shutter.css";s:4:"942c";s:79:"Resources/Public/GallerySource/SuperSized/slideshow/theme/supersized.shutter.js";s:4:"295b";s:83:"Resources/Public/GallerySource/SuperSized/slideshow/theme/supersized.shutter.min.js";s:4:"9855";s:48:"Resources/Public/Images/Isotope/bg-lightgrey.png";s:4:"5433";s:14:"doc/manual.pdf";s:4:"233e";s:14:"doc/manual.sxw";s:4:"9483";}',
);

?>