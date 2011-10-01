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
class Tx_YagThemepackJquery_ViewHelpers_SuperSizedViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractTagBasedViewHelper {
	
	
	/**
	 * @var Tx_Yag_Domain_Configuration_ConfigurationBuilder
	 */
	protected $configurationBuilder;

	
	/**
	 * (non-PHPdoc)
	 * @see Classes/Core/ViewHelper/Tx_Fluid_Core_ViewHelper_AbstractTagBasedViewHelper::initialize()
	 */
	public function initialize() {
		parent::initialize();
		$this->configurationBuilder =  Tx_Yag_Domain_Configuration_ConfigurationBuilderFactory::getInstance();
	}
	

	/**
	 * Renders the crossSlide call
	 *
	 * @param string $identifier
	 * @param Tx_PtExtlist_Domain_Model_List_ListData $listData
	 */
	public function render(Tx_PtExtlist_Domain_Model_List_ListData $listData) {

		$superSizedSettings = $this->buildSuperSizedSettings();

		$superSizedSettings['slides'] = $this->buildSlideArray($listData);
		$superSizedSettingsJSon = json_encode($superSizedSettings);

		$this->templateVariableContainer->add('superSizedImagePath', $superSizedSettings['image_path']);

		$output = '
			<script type="text/javascript">
				jQuery(function($){
					$.supersized('.$superSizedSettingsJSon.');
				});
			</script>';

		return $output;
	}


	/**
	 * @return array
	 */
	public function buildSuperSizedSettings() {
		$headerUtility = t3lib_div::makeInstance('Tx_Yag_Utility_HeaderInclusion'); /** @var $headerUtility Tx_Yag_Utility_HeaderInclusion */

		$superSizedSettings = $this->configurationBuilder->getSettings('superSizedSettings');

		foreach($superSizedSettings as &$value) {
			$value = is_numeric($value) ? intval($value) : $value;
		}

		$superSizedSettings['image_path'] = $headerUtility->getFileRelFileName($superSizedSettings['image_path']);

		return $superSizedSettings;
	}

	


	/**
	 * @param $listData
	 * @return void
	 */
	protected function buildSlideArray($listData) {
		$slides = array();

		foreach($listData as $listRow) {
			$image = $listRow['image']->getValue(); /** @var $image Tx_Yag_Domain_Model_Item */
			$slides[] = array(
				'image' => $image->getSourceuri(),
				'title' => $image->getTitle(),
			);
		}

		return $slides;
	}
}