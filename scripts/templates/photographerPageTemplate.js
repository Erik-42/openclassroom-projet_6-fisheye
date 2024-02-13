export class photographerPageFactory {
  constructor(data) {
    this.data = data;
    this.urlPhotographer = `../../pages/photographer/photographerPage.html?=${data.id}`;
    this.photographerPortrait = `../../assets/photographers/${data.portrait}`;
    this.photographerName = `../../assets/photographers/${data.name}`;
    this.location = `../../assets/photographers/${data.city}, ../../assets/photographers/${data.country}`;
    this.tagline = `../../assets/photographers/${data.tagline}`;
    this.price = `../../assets/photographers/${data.price}€/jour`;
  }

  photographerDomBanner() {
    const photographerBannerStructure = `
        < section class = "photographer_header">
            < h2 class = "photographer_header__name">${this.photographerName}</h2>
            <p class="photographer_header__location">${this.location}</p>
            <p class = "photographer_header__text" >${this.tagline}</p>
            < button class="contact_button contact-me-btn" aria-label="Contact me" tabindex="1" onclick="displayModal()" >Contactez-moi</button>
            < div class = "photographer_header__portrait" >
                < img src="${this.photographerPortrait}" alt="portrait photographe" class="photographer_header__portrait__img" >
            </div>
        </section>
        `;

    const container = document.createElement("section");
    container.classList.add("photographer_header");
    container.innerHTML = photographerBannerStructure;

    return container.firstChild;
  }
}
