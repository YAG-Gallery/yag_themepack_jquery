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
 * @author Daniel Lienert <daniel@lienert.cc>
 * @package ViewHelpers
 */
class Tx_YagThemepackJquery_ViewHelpers_Wookmark_TagListViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper
{
    /**
     * @var Tx_Yag_Domain_Repository_TagRepository
     */
    protected $tagRepository;
    
    
    /**
     * (non-PHPdoc)
     * @see Classes/Core/ViewHelper/Tx_Fluid_Core_ViewHelper_AbstractTagBasedViewHelper::initialize()
     */
    public function initialize()
    {
        parent::initialize();

        $this->tagRepository = $this->objectManager->get('Tx_Yag_Domain_Repository_TagRepository');
    }
    

    /**
     * Renders a tagList
     *
     * @param string $identifier
     * @return string
     */
    public function render()
    {
        $tags = $this->tagRepository->getTagsByCurrentItemListFilterSettings();
        $tags = array_slice($tags, 0, 10);

        $output = '';

        foreach ($tags as $tag) {
            $cleanTagName = str_replace(array('.', ' '), '', $tag['name']);

            $this->templateVariableContainer->add('tagName', $tag['name']);
            $this->templateVariableContainer->add('cleanTagName', $cleanTagName);
            $this->templateVariableContainer->add('tagCount', $tag['count']);

            $output .= $this->renderChildren();

            $this->templateVariableContainer->remove('tagName');
            $this->templateVariableContainer->remove('cleanTagName');
            $this->templateVariableContainer->remove('tagCount');
        }

        return $output;
    }
}
