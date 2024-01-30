class photographerFactory {
    constructor(data) {
        this.data = data
        this.urlPhotographer = `photographerPage.html?=${data.id}`
        this.photographerPortrait = `assets/photographers/${data.portrait}`
        this.photographerName = `${data.name}`
        this.location = `${data.city}, ${data.country}`
        this.tagline = `${data.tagline}`
        this.price = `${data.price}€/jour`
    }

    photographerBannerElements() {
        const photographerBannerStructure = `
        < section class = "photographer__card">
            < h2 class = "photographer__card__name">${this.photographerName}</h2>
            <p class="photographer__card__location">${this.location}</p>
            <p class = "photographer__card__text" >${this.tagline}</p>
            < button class="contact_button contact-me-btn" aria-label="Contact me" tabindex="1" onclick="displayModal()" >Contactez-moi</button>
            < div class = "photographer__portrait" >
                < img src="${this.photographerPortrait}" alt="portrait photographe" class="photographer__portrait__img" >
            </div>
        </section>
        `;

        const container = document.createElement('div');
        container.innerHTML = photographerBannerStructure;

        return container.firstChild;
    }
}