<?php
/***************************************************************
*  Copyright notice
*
*  (c) 2013 Sebastian Helzle <sebastian@helzle.net>
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
 * @author Sebastian Helzle <sebastian@helzle.net>
 * @package ViewHelpers
 */
class Tx_YagThemepackJquery_ViewHelpers_Wookmark_ImageListViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractTagBasedViewHelper {
	
	
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
	 * Renders image tags
	 *
	 * @param Tx_PtExtlist_Domain_Model_List_ListData $listData
	 * @return string
	 */
	public function render(Tx_PtExtlist_Domain_Model_List_ListData $listData) {

		$output = '';

		foreach($listData as $rowIndex => $row) {

			$image = $row->getCell('image')->getValue(); /** @var Tx_YAG_Domain_Model_Item $image  */

			$tagNames = array();
			if(array($image->getTags())) {
				foreach($image->getTags() as $tag) {
					$tagNames[] = str_replace(array('.', ' '), '', $tag->getName());
				}
			}

			$this->templateVariableContainer->add('image', $image);
            $this->templateVariableContainer->add('imageIndex', $rowIndex +1);
			$this->templateVariableContainer->add('quotedTags', '"' . implode('","', $tagNames) . '"');
			$this->templateVariableContainer->add('tags', implode(', ', $tagNames));

			$output .= $this->renderChildren();

			$this->templateVariableContainer->remove('quotedTags');
			$this->templateVariableContainer->remove('tags');
			$this->templateVariableContainer->remove('image');
			$this->templateVariableContainer->remove('imageIndex');

		}

		return $output;

	}
}
