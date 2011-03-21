<?php
if (!defined ('TYPO3_MODE')) die ('Access denied.');

t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript', '[yag] Themepack jQuery');

//$TCA['tt_content']['types']['list']['subtypes_addlist'][$_EXTKEY . '_pi1'] = 'pi_flexform';
//t3lib_extMgm::addPiFlexFormValue($_EXTKEY . '_pi1', 'FILE:EXT:' . $_EXTKEY . '/Configuration/FlexForms/flexform_list.xml');


?>