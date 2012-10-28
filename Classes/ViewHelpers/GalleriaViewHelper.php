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
class Tx_YagThemepackJquery_ViewHelpers_GalleriaViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractTagBasedViewHelper {


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
	 * @param string $identifier
	 * @param Tx_PtExtlist_Domain_Model_List_ListData $listData
	 * @return string
	 */
	public function render($identifier, Tx_PtExtlist_Domain_Model_List_ListData $listData) {

		$output = "
			<script>
				var galleria%sdata = %s;
				Galleria.run('#galleria-%s', {
					dataSource: galleria%sdata
				});
			</script>
		";

		return sprintf($output, $identifier, $this->buildGalleriaJSONData($listData), $identifier, $identifier);
	}



	/**
	 * @param Tx_PtExtlist_Domain_Model_List_ListData $listData
	 * @return string
	 */
	protected function buildGalleriaJSONData(Tx_PtExtlist_Domain_Model_List_ListData $listData) {

		$resolutionConfigCollection = $this->configurationBuilder->buildThemeConfiguration()->getResolutionConfigCollection();

		$data = array();

		foreach($listData as $row) { /** @var Tx_PtExtlist_Domain_Model_List_Row $row */
			$image = $row->getCell('image')->getValue(); /** @var Tx_Yag_Domain_Model_Item $image */

			$pathPrefix = TYPO3_MODE === 'BE' ? '../' : $GLOBALS['TSFE']->absRefPrefix;

			$data[] = array(
				'thumb' => $pathPrefix . $image->getResolutionByConfig($resolutionConfigCollection->getResolutionConfig('thumb'))->getPath(),
				'image' => $pathPrefix. $image->getResolutionByConfig($resolutionConfigCollection->getResolutionConfig('medium'))->getPath(),
				'big' => $pathPrefix . $image->getResolutionByConfig($resolutionConfigCollection->getResolutionConfig('big'))->getPath(),
        		'title' => $image->getTitle(),
        		'description' =>  $image->getDescription(),
        		'link' => $this->renderTypoLink($image->getLink())
			);
		}

		return json_encode($data);
	}


	protected function renderTypoLink($linkData) {
		$cObj = t3lib_div::makeInstance('tslib_cObj');	/** @var tslib_cObj $cObj */
		$configuration = array(
			'parameter' => $linkData,
			'returnLast' => true
		);

		return $cObj->typolink('', $configuration);
	}
}