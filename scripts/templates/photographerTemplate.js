import { launchModal } from "../elements/contactModal/contactModal.js";

export function photographerTemplate(data) {
  const { name, id, portrait, city, country, tagline, price } = data;
  const picture = `https://erik-42.github.io/openclassroom-fisheye/assets/photographers/photographers-ID-Photos/${portrait}`;
  function photographerId() {
    // Redirige vers la page photographer.html en passant l'ID comme paramètre
    window.location.href = `https://erik-42.github.io/openclassroom-fisheye/pages/photographer/photographerPage.html?id=${id}`;
  }

  function getUserCardDOM() {
    const article = document.createElement("article");

    const linkPhotographerPage = document.createElement("a");
    linkPhotographerPage.href = `javascript:void(0)`;
    linkPhotographerPage.addEventListener("click", photographerId);

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "photo de " + name);
    img.classList.add("photographer_section_img");

    const h2Name = document.createElement("h2");
    h2Name.textContent = name;
    h2Name.classList.add("photographer_section_name");

    const cityLocation = document.createElement("p");
    cityLocation.textContent = city + ", " + country;
    cityLocation.classList.add("photographer_section_city");

    const tag = document.createElement("p");
    tag.textContent = tagline;
    tag.classList.add("photographer_section_tagline");

    const prix = document.createElement("p");
    prix.textContent = price + `€ / jour`;
    prix.classList.add("photographer_section_price");

    linkPhotographerPage.appendChild(img);
    linkPhotographerPage.appendChild(h2Name);
    article.appendChild(linkPhotographerPage);
    article.appendChild(cityLocation);
    article.appendChild(tag);
    article.appendChild(prix);

    return article;
  }

  function getUserHeaderDOM() {
    const photographer_modal_name = document.querySelector(
      ".modal__photographerName"
    );
    photographer_modal_name.innerText = name;
    const photographerBannerBeginStructure = `
                <div class="photographer_header__info">
                    <h2 aria-label="le nom du photographe est ${name}" class = "photographer_header__name">${name}</h2>
                    <h3 aria-label="la localisation du photographe est ${city}, ${country}" class="photographer_header__location">${city}, ${country}</h3>
                    <p aria-label="la devise du photographe est ${tagline}" class = "photographer_header__text" >${tagline}</p>
                </div>`;

    const contactBtn = document.createElement("button");
    contactBtn.className = "contact_button contact-me-btn";
    contactBtn.ariaLabel = "Contactez moi";
    contactBtn.tabIndex = "2";
    contactBtn.innerText = "Contactez-moi";
    contactBtn.addEventListener("click", launchModal);

    const divPortrait = document.createElement("div");
    divPortrait.className = "photographer_header__portrait";
    divPortrait.innerHTML = `<img src="${picture}" alt="Photo de ${name}" class="photographer_header__portrait__img" >`;

    const container = document.createElement("section");
    container.classList.add("photographer_header");
    container.innerHTML = photographerBannerBeginStructure;
    container.appendChild(contactBtn);
    container.appendChild(divPortrait);
    return container;
  }
  return {
    name,
    picture,
    city,
    country,
    tagline,
    price,
    getUserCardDOM,
    getUserHeaderDOM,
  };
}
