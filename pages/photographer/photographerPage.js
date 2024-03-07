import {
  photographerTemplate
} from '../../scripts/templates/photographerTemplate.js'
import {
  mediaFactory
} from "../../scripts/utils/mediaFactory.js"

import {
  dropDownEvent
} from "../../scripts/elements/dropdownSort/dropdownSort.js"
import {
  getMediaAndName
} from '../../scripts/utils/getMediaAndName.js'
import {
  launchModal
} from '../../scripts/elements/contactModal/contactModal.js'
 import {popupPhotographer} from "../../scripts/elements/photographerPopup/photographerPopup.js"

export const {
  medias,
  photographer
} = await getMediaAndName()

async function displayHeader(photographer) {
  const photographersHeader = document.querySelector(".photographer_container");

  photographersHeader.innerHTML = ""
  const photographerPage = new photographerTemplate(photographer);
  const photographerBanner = photographerPage.getUserHeaderDOM();

  photographersHeader.appendChild(photographerBanner);

}
export async function displayMedias(medias, photographerName) {
  const mediasContainer = document.querySelector(".photograph__gallery");
  mediasContainer.innerHTML = ""
  medias.forEach(media => {
    const mediaPage = mediaFactory(media, photographerName);
    const mediaCard = mediaPage.getMediaCardDOM();

    mediasContainer.appendChild(mediaCard);
  })

}
// export async function displayPopup(likes, photographerId) {
//   const popupContainer = document.querySelector(".photograph__popup");
//   popupContainer.innerHTML = "";



//     popupContainer.appendChild();
//   };


async function init() {
  const photographPopup = document.querySelector(".photograph__popup");

  
  photographPopup.appendChild(popupPhotographer(`${photographer.price} €`,medias));
  dropDownEvent()


  //   displayData(photographers);
  displayHeader(photographer);
  displayMedias(medias, photographer.name);
}

init();