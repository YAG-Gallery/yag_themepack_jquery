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
class Tx_YagThemepackJquery_ViewHelpers_CrossSlideViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractTagBasedViewHelper {
	
	
	/**
	 * @var Tx_Yag_Domain_Configuration_ConfigurationBuilder
	 */
	protected $configurationBuilder;
	
	
	/**
	 * @var Tx_Yag_Domain_Configuration_Image_ResolutionConfigCollection
	 */
	protected $resolutionConfigCollection;
	
	
	/**
	 * CrossSlide Settings
	 * 
	 * @var array
	 */
	protected $crossSlideSettings = array();
	
	
	/**
	 * @var bool
	 */
	protected $zoomReversed = false;
	
	
	/**
	 * @var bool
	 */
	protected $panReversed = false;
	
	
	/**
	 * (non-PHPdoc)
	 * @see Classes/Core/ViewHelper/Tx_Fluid_Core_ViewHelper_AbstractTagBasedViewHelper::initialize()
	 */
	public function initialize() {
		parent::initialize();
		
		$this->configurationBuilder =  Tx_Yag_Domain_Configuration_ConfigurationBuilderFactory::getInstance();
		$this->resolutionConfigCollection = $this->configurationBuilder->buildThemeConfiguration()->getResolutionConfigCollection();
		$this->crossSlideSettings = $this->configurationBuilder->getSettings('crossSlide');					
	}
	

	/**
	 * Renders the crossSlide call
	 *
	 * @param string $identifier
	 * @param Tx_PtExtlist_Domain_Model_List_ListData $listData
	 */
	public function render($identifier, Tx_PtExtlist_Domain_Model_List_ListData $listData) { 
		$imageListArray = $this->buildImageListArray($listData);
		$parameterString = $this->buildParameterString($galleryOptions);
		
		return $this->buildScript($identifier, $parameterString, $imageListArray);
	}

	
	
	/**
	 * Combines the two parts of the crossSlide call
	 * 
	 * @param string $identifier div identifier
	 * @param string $parameterString parameter JSON array
	 * @param string $imageListArray imageList JSON array
	 * @return complet crossSlide call
	 */
	protected function buildScript($identifier, $parameterString, $imageListArray) {
		$jsScript = "$('#%s').crossSlide(%s,%s);";
		$jsScript = sprintf($jsScript, $identifier, $parameterString, $imageListArray);
		return $jsScript;
	}
	
	
	
	/**
	 * BuildParameterString
	 * 
	 * @return string gallery parameter JSON string
	 */
	protected function buildParameterString() {
		$gallerySettings = $this->crossSlideSettings['gallery'];
		array_filter($gallerySettings);
		
		$parameterString = json_encode($gallerySettings);
		
		return $parameterString;
	}
	
	
	
	/**
	 * Build the image JOSN parameter string
	 * 
	 * @param Tx_PtExtlist_Domain_Model_List_ListData $listData
	 * @return string image JOSN parameter string
	 */
	protected function buildImageListArray(Tx_PtExtlist_Domain_Model_List_ListData $listData) {
		
		$jsImageArray = array();
		
		foreach($listData as $row) { /* @var Tx_PtExtlist_Domain_Model_List_Row $row */
			$imageObject = $row->getCell('image')->getValue(); /* @var $imageObject Tx_Yag_Domain_Model_Item */
			
			$jsImage = array(
				'src' => $imageObject->getResolutionByConfig($this->resolutionConfigCollection->getResolutionConfig('medium'))->getPath(),
				'alt' => $imageObject->getTitle()
			);
			
			$jsImage['time'] = $this->crossSlideSettings['image']['time'];
			$jsImage = array_merge($jsImage, $this->buildPanAndZoom($this->crossSlideSettings['image']));
			$jsImageArray[] = $jsImage;
		}

		return json_encode($jsImageArray);
	}
	
	
	
	/**
	 * Build 'from' and 'to' for a single image
	 * 
	 * @param array $imageSettings
	 * @return array
	 */
	protected function buildPanAndZoom($imageSettings) {
		
		$pan[] = sprintf('%s%% %s%% ',
									$this->calculatePanRandom($imageSettings['pan']['startY'], $imageSettings['pan']['variance']),
									$this->calculatePanRandom($imageSettings['pan']['startX'], $imageSettings['pan']['variance'])
									);
		$pan[] = sprintf('%s%% %s%% ',
									$this->calculatePanRandom($imageSettings['pan']['stopY'], $imageSettings['pan']['variance']),
									$this->calculatePanRandom($imageSettings['pan']['stopY'], $imageSettings['pan']['variance'])
									);
									
		$zoom[] = $this->calculateZoomRandom($imageSettings['zoom']['stop'], $imageSettings['zoom']['variance']) . 'x';
		$zoom[] = $this->calculateZoomRandom($imageSettings['zoom']['start'], $imageSettings['zoom']['variance']) . 'x';									
									
		if($imageSettings['pan']['alternate']) $this->panReversed = $this->panReversed ? false : true;
		if($imageSettings['zoom']['alternate']) $this->zoomReversed = $this->zoomReversed ? false : true;

		if($this->panReversed) $pan = array_reverse($pan);
		if($this->zoomReversed) $zoom = array_reverse($zoom);
		
		return array(
			'from' => current($pan) . current($zoom),
			'to' => end($pan) . end($zoom),
		);
	}
	
	
	
	/**
	 * Calculate pan random variance
	 * 
	 * @param int $value
	 * @param int $variance
	 */
	protected function calculatePanRandom($value, $variance) {
		$randVariance = (int) rand($variance * -1, $variance);
		
		$value += $randVariance;
		$value < 0 ? 0 : $value;
		$value > 100 ? 100 : $value;
		
		return $value;
	}
	
	
	
	/**
	 * Calculate zoom random variance
	 * 
	 * @param int $value
	 * @param int $variance
	 */
	protected function calculateZoomRandom($value, $variance) {
		$variance = (int)($variance * 1000);
		$randVariance = (int)rand($variance * -1, $variance);
		
		$value += $randVariance / 1000;
		$value < 1 ? 1 : $value;

		return $value;
	}
	
}