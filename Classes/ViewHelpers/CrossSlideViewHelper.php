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
	 * @var Tx_Yag_Domain_Configuration_Image_ResolutionConfigCollection
	 */
	protected $resolutionConfigCollection;
	
	
	
	/**
	 * (non-PHPdoc)
	 * @see Classes/Core/ViewHelper/Tx_Fluid_Core_ViewHelper_AbstractTagBasedViewHelper::initialize()
	 */
	public function initialize() {
		parent::initialize();
		
		$this->resolutionConfigCollection = Tx_Yag_Domain_Configuration_ConfigurationBuilderFactory::getInstance()
													->buildThemeConfiguration()
													->getResolutionConfigCollection();								
	}
	

	/**
	 * 
	 * Enter description here ...
	 * @param string $identifier
	 * @param Tx_PtExtlist_Domain_Model_List_ListData $listData
	 * @param array $galleryOptions
	 * @param array $imageOptions
	 */
	public function render($identifier, Tx_PtExtlist_Domain_Model_List_ListData $listData, $galleryOptions = array(), $imageOptions = array()) { 
		$imageListArray = $this->buildImageListArray($listData, $imageOption);
		$parameterString = $this->buildParameterString($galleryOptions);
		
		return $this->buildScript($identifier, $parameterString, $imageListArray);
	}

	
	protected function buildScript($identifier, $parameterString, $imageListArray) {
		$jsScript = "$('#%s').crossSlide(%s,%s);";
		$jsScript = sprintf($jsScript, $identifier, $parameterString, $imageListArray);

		return $jsScript;
	}
	
	
	protected function buildParameterString($galleryOptions) {
		array_filter($galleryOptions);
		
		$parameterString = json_encode($galleryOptions);
		
		return $parameterString;
	}
	
	
	protected function buildImageListArray(Tx_PtExtlist_Domain_Model_List_ListData $listData, $imageOption = array()) {
		
		$jsImageArray = array();
		
		foreach($listData as $row) { /* @var Tx_PtExtlist_Domain_Model_List_Row $row */
			$imageObject = $row->getCell('image')->getValue(); /* @var $imageObject Tx_Yag_Domain_Model_Item */
			
			$jsImage = array(
				'src' => $imageObject->getResolutionByConfig($this->resolutionConfigCollection->getResolutionConfig('medium'))->getPath(),
				'alt' => $imageObject->getTitle()
			);
			
			$jsImage['from'] = '100% 50% 1x';
			$jsImage['to'] =   '30% 50% 1.5x';
			$jsImage['time'] =   '5';
			
			$jsImageArray[] = $jsImage;
		}
		
		return json_encode($jsImageArray);
	}
}