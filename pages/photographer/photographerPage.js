import { photographerTemplate } from "../../scripts/templates/photographerTemplate.js";
import { mediaFactory } from "../../scripts/utils/mediaFactory.js";
import { dropDownEvent } from "../../scripts/elements/dropdownSort/dropdownSort.js";
import { getMediaAndName } from "../../scripts/utils/getMediaAndName.js";
import { popupPhotographer } from "../../scripts/elements/photographerPopup/photographerPopup.js";
import { LightboxModal } from "../../scripts/elements/lightboxModal/lightboxModal.js";

export const { medias, photographer } = await getMediaAndName();

// affiche le header photographe
async function displayHeader(photographer) {
  const photographersHeader = document.querySelector(".photographer_container");
  photographersHeader.innerHTML = "";
  const photographerPage = new photographerTemplate(photographer);
  const photographerBanner = photographerPage.getUserHeaderDOM();
  photographersHeader.appendChild(photographerBanner);
}

// affiche la galerie photographe
export async function displayMedias(medias, photographerName) {
  const mediasContainer = document.querySelector(".photograph__gallery");
  mediasContainer.innerHTML = "";
  const mediasCards = [];
  let tabindex = 4;
  medias.forEach((media) => {
    const mediaPage = mediaFactory(media, photographerName, tabindex);
    const mediaCard = mediaPage.getMediaCardDOM();
    mediasContainer.appendChild(mediaCard);
    mediasCards.push(mediaCard);
    tabindex += 2;
  });
  LightboxModal.init(mediasCards);
}

async function init() {
  const photographPopup = document.querySelector(".photograph__popup");
  photographPopup.appendChild(
    popupPhotographer(`${photographer.price} €`, medias),
  );
  dropDownEvent();
  displayHeader(photographer);
  displayMedias(medias, photographer.name);
}

init();
