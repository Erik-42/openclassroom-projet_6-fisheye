
import {photographerTemplate} from '../../scripts/templates/photographerTemplate.js'
import {mediaFactory} from "../../scripts/utils/mediaFactory.js"

import {dropDownEvent} from "../../scripts/elements/dropdownSort/dropdownSort.js"
import { getMediaAndName} from '../../scripts/utils/getMediaAndName.js'


export const {medias,photographer} = await getMediaAndName()

async function displayHeader(photographer) {
  const photographersHeader = document.querySelector(".photographer_container");

photographersHeader.innerHTML=""
    const photographerPage = new photographerTemplate(photographer);
    const photographerBanner = photographerPage.getUserHeaderDOM();
    
    photographersHeader.appendChild(photographerBanner);

}
export async function displayMedias(medias,photographerName) {
  const mediasContainer = document.querySelector(".photograph__gallery");
  mediasContainer.innerHTML=""
  medias.forEach(media =>{
    const mediaPage = mediaFactory(media,photographerName);
    const mediaCard = mediaPage.getMediaCardDOM();
    
    mediasContainer.appendChild(mediaCard);
  })

}

async function init() {
  

  dropDownEvent()

 
//   displayData(photographers);
  displayHeader(photographer);
  displayMedias(medias,photographer.name);
}

init();
