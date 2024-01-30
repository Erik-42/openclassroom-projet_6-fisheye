async function getPhotographers() {

    const localeURL = '../../data/photographersData.json'

    const response = await fetch(localeURL)

    const data = await response.json()

    return data
}

async function displayData(photographers) {
    const photographersHeader = document.querySelector(".photographer_header");

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
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
    displayData(photographers);
}

init();