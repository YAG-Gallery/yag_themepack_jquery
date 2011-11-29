<?php
/***************************************************************
*  Copyright notice
*
*  (c) 2010 Daniel Lienert <daniel@lienert.cc>, Michael Knoll <knoll@punkt.de>
*  All rights reserved
*
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/

/**
 * Class 
 * 
 * @author Daniel Lienert <daniel@lienert.cc>
 * @package ViewHelpers
 */
class Tx_YagThemepackJquery_ViewHelpers_NivoSliderViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractTagBasedViewHelper {
	
	
	/**
	 * @var Tx_Yag_Domain_Configuration_ConfigurationBuilder
	 */
	protected $configurationBuilder;


	/**
	 * @var Tx_Yag_Utility_HeaderInclusion
	 */
	protected $headerInclusion;


	/**
	 * @var string
	 */
	protected $contextIdentifier;
	
	/**
	 * (non-PHPdoc)
	 * @see Classes/Core/ViewHelper/Tx_Fluid_Core_ViewHelper_AbstractTagBasedViewHelper::initialize()
	 */
	public function initialize() {
		parent::initialize();
		$this->configurationBuilder =  Tx_Yag_Domain_Configuration_ConfigurationBuilderFactory::getInstance();
		$this->headerInclusion = t3lib_div::makeInstance('Tx_Extbase_Object_ObjectManager')->get('Tx_Yag_Utility_HeaderInclusion');
		$this->contextIdentifier = $this->configurationBuilder->getContextIdentifier();
	}
	

	/**
	 * @return void
	 */
	public function render() {

		$nivoSettings = $this->buildNivoSettings();
		$nivoSettings = json_encode($nivoSettings);

		$output = '
				 jQuery(window).load(function() {
					  jQuery("#nivoSlider-'.$this->contextIdentifier.'").nivoSlider('.$nivoSettings.');
				 });
			';

		$this->addCustomCSS();
		$this->headerInclusion->addJsInlineCode('superSized-' . $this->configurationBuilder->getContextIdentifier(), $output);

	}

	/**
	 * @return void
	 */
	public function addCustomCSS() {

		$nivoSettings = $this->configurationBuilder->getJSCompliantSettings('nivoSliderSettings');

		if($nivoSettings['controlNavThumbs'] == true) {
			$this->headerInclusion->addCSSFile($this->headerInclusion->getFileRelFileName($this->configurationBuilder->getSettings('thumbNavCSS')));
		} else {
			$itemCount = $this->templateVariableContainer->get('listData')->getCount();
			$leftMargin = (int) ($itemCount * 12.5);

			$this->headerInclusion->addCssInlineBlock(
				'nivoSlider-'.$this->contextIdentifier,
				'#nivoSlider-'.$this->contextIdentifier.' .nivo-controlNav {
					margin-left: -'.$leftMargin.'px;
				}'
			);
		}
	}


	/**
	 * @return array
	 */
	public function buildNivoSettings() {
		$nivoSettings = $this->configurationBuilder->getJSCompliantSettings('nivoSliderSettings');

		$nivoSettings['controlNavThumbsFromRel'] = true;

		return $nivoSettings;
	}
}