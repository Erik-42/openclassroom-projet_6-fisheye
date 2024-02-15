export function photographerTemplate(data) {
  const { name, id, portrait, city, country, tagline, price } = data;

  const picture = `../../assets/photographers/photographers-ID-Photos/${portrait}`;

  function photographerId() {
    // Redirige vers la page photographer.html en passant l'ID comme paramètre
    window.location.href = `../../pages/photographer/photographerPage.html?id=${id}`;
  }

  function getUserCardDOM() {
    const article = document.createElement("article");

    const linkPhotographerPage = document.createElement("a");
    linkPhotographerPage.href = `javascript:void(0)`;
    linkPhotographerPage.addEventListener("click", photographerId);

    const img = document.createElement("img");
    img.setAttribute("src", picture);
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
    prix.textContent = price + ` / jour`;
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
    const photographerBannerStructure = `
                <div class="photographer_header__info">
                    <h2 class = "photographer_header__name">${name}</h2>
                    <p class="photographer_header__location">${city}, ${country}</p>
                    <p class = "photographer_header__text" >${tagline}</p>
                </div>
            <button class="contact_button contact-me-btn" aria-label="Contact me" tabindex="1" onclick="displayModal()" >Contactez-moi</button>
            <div class = "photographer_header__portrait" >
                <img src="${picture}" alt="portrait photographe" class="photographer_header__portrait__img" >
            </div>
        `;

    const container = document.createElement("section");
    container.classList.add("photographer_header");
    container.innerHTML = photographerBannerStructure;

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
