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
class Tx_YagThemepackJquery_ViewHelpers_Isotope_ImageListViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractTagBasedViewHelper
{
    /**
     * @var Tx_Yag_Domain_Configuration_ConfigurationBuilder
     */
    protected $configurationBuilder;
    
    
    
    /**
     * (non-PHPdoc)
     * @see Classes/Core/ViewHelper/Tx_Fluid_Core_ViewHelper_AbstractTagBasedViewHelper::initialize()
     */
    public function initialize()
    {
        parent::initialize();
        $this->configurationBuilder =  Tx_Yag_Domain_Configuration_ConfigurationBuilderFactory::getInstance();
    }
    

    /**
     * Renders the crossSlide call
     *
     * @param string $identifier
     * @param Tx_PtExtlist_Domain_Model_List_ListData $listData
     */
    public function render(Tx_PtExtlist_Domain_Model_List_ListData $listData)
    {
        $output = '';

        foreach ($listData as $row) {
            $image = $row->getCell('image')->getValue(); /** @var Tx_YAG_Domain_Model_Item $image  */

            $cleanTagNames = array();
            if (array($image->getTags())) {
                foreach ($image->getTags() as $tag) {
                    $cleanTagNames[] = str_replace(array('.', ' '), '', $tag->getName());
                }
            }

            $resolutionName = $this->getRandomResolutionName();
            $resolutionHeight = $this->getResolutionHeight($resolutionName, $image);

            $this->templateVariableContainer->add('image', $image);
            $this->templateVariableContainer->add('resolutionName', $resolutionName);
            $this->templateVariableContainer->add('resolutionHeight', $resolutionHeight);
            $this->templateVariableContainer->add('tags', implode(' ', $cleanTagNames));

            $output .= $this->renderChildren();

            $this->templateVariableContainer->remove('tags');
            $this->templateVariableContainer->remove('image');
            $this->templateVariableContainer->remove('resolutionName');
            $this->templateVariableContainer->remove('resolutionHeight');
        }

        return $output;
    }


    /**
     * @param $resolutionName
     * @param Tx_YAG_Domain_Model_Item $image
     * @return int
     */
    protected function getResolutionHeight($resolutionName, Tx_YAG_Domain_Model_Item $image)
    {
        $resolutionConfig = $this->configurationBuilder->buildThemeConfiguration()->getResolutionConfigCollection()->getResolutionConfig($resolutionName);
        $resolutionImage = $image->getResolutionByConfig($resolutionConfig);
        $resolutionHeight = $resolutionImage->getHeight();

        return $resolutionHeight;
    }


    /**
     * @return int|string
     */
    protected function getRandomResolutionName()
    {
        $weightArray = $this->configurationBuilder->getSettings('blockSizeWeighting');

        $maxScore = 0;
        $selectedResolution = '';

        foreach ($weightArray as $resolution => $weight) {
            $rand = rand(0, $weight);
            if ($rand > $maxScore) {
                $selectedResolution = $resolution;
                $maxScore = $rand;
            }
        }
        return $selectedResolution;
    }
}
