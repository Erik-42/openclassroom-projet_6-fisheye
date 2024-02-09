
import {getPhotographers} from '../../scripts/utils/getData.js'

async function displayData(photographers) {
    const photographersHeader = document.querySelector(
      ".photographer_container"
    );

    photographers.forEach((photographer) => {
        // const photographerModel = new photographerPageTemplate(photographer);
        // const userCardDOM = photographerModel.getUserCardDOM();
        // photographersHeader.appendChild(userCardDOM);
        const photographerFactory = new photographerFactory(photographer);
        const photographerBanner = photographerFactory.photographerBannerElement();

        photographersHeader.appendChild(photographerBanner);
    });
}

async function init() {
    const url = new URL(window.location);
    const idPhotographer = url.searchParams.get('id')
    // Récupère les datas des photographes
    const data = await getPhotographers();
    const photographer = data.photographers.filter(p => p.id == idPhotographer)[0]
    const medias = data.media.filter(m =>m.photographerId==idPhotographer)
    console.log(medias)
    // displayData(photographers);
    displayHeader(photographer)
    displayMedias(medias)
}

init();