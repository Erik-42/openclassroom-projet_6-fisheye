import { getPhotographers } from "../../scripts/utils/getData.js";
import {photographerTemplate} from '../../scripts/templates/photographerTemplate.js'
import {mediaFactory} from "../../scripts/utils/mediaFactory.js"

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
  const url = new URL(window.location);
  const idPhotographer = url.searchParams.get("id");
  // Récupère les datas des photographes
  const data = await getPhotographers();
  const f = data.photographers.filter(
    (p) => p.id == idPhotographer
  )[0];
  const medias = data.media.filter((m) => m.photographerId == idPhotographer);
//   displayData(photographers);
  displayHeader(f);
  displayMedias(medias,f.name);
}

init();
