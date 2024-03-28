import {
  enableBodyScroll,
  disableBodyScroll,
} from "../../utils/body-scroll-lock.js";
// import { imageTemplate } from "../../templates/imageTemplate.js";
// import { videoTemplate } from "../../scripts/templates/videoTemplate.js";
// import { mediaFactory } from "../../utils/mediaFactory.js";

/**
 * @property {HTMLElement} element
 * @property {string[]} images Chemin des images de la lightbox
 * @property {string} url image actuellement affichée
 */

export class LightboxModal {
  static init(mediasCards) {
    const gallery = mediasCards.map((mediasCard) =>
    {
      return {
        url : mediasCard
        .querySelector(".photograph__gallery__card__photo")
        .getAttribute("href"),
        title : mediasCard.querySelector('.photograph__gallery__card__photo__info__titre').innerText
      }
    }
    );
    mediasCards.forEach((mediasCard) =>
      mediasCard
        .querySelector(".photograph__gallery__card__photo")
        .addEventListener("click", (e) => {
          e.preventDefault();
          new LightboxModal({url:e.currentTarget.getAttribute("href"),title:e.currentTarget.dataset.title}, gallery);
        }),
    );
  }

  /**
   * @param {string} url URL de l'image actuellement affichée
   * @param {string[]} images Chemin des images de la lightbox
   */
  constructor(obj, tabImages) {
    this.element = this.buildDOM(obj);
    this.images = tabImages;
    this.loadImage(obj);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.appendChild(this.element);
    disableBodyScroll(this.element);
    document.addEventListener("keyup", this.onKeyUp);
  }

  /**
   * @param {string} url URL de l'image actuellement affichée
   */
  loadImage(obj) {
    let image;
    this.url = null;
    const container = this.element.querySelector(".lightboxModal__container");
    const loader = document.createElement("div");
    loader.classList.add("lightboxModal__loader");
    container.innerHTML = "";
    container.appendChild(loader);

    if (obj.url.substring(obj.url.length - 4, obj.url.length) == ".mp4") {
      image = document.createElement("video");
      image.controls = true;
      const desc = document.createElement('p')
      desc.innerText = `Le titre de la video est ${obj.title}`
      image.appendChild(desc)
      container.removeChild(loader);
      container.appendChild(image);
    } else {
      image = new Image();
      image.onload = () => {
        container.removeChild(loader);
        container.appendChild(image);
        this.url = obj.url;
      };
      image.alt=`Le titre de la photo est ${obj.title}`
    }

    image.src = obj.url;
   
    this.url = obj.url;
    document.querySelector(".lightmodal_titre").innerText=obj.title
  }

  /**
   * @param {KeyboardEvent} e
   */
  onKeyUp(e) {
    if (e.key == "Escape") {
      this.close(e);
    } else if (e.key == "ArrowLeft") {
      this.prev(e);
    } else if (e.key == "ArrowRight") {
      this.next(e);
    }
  }

  /**
   * ferme la lightboxModal
   * @param {MouseEvent|KeyboardEvent} e
   */
  close(e) {
    e.preventDefault();
    this.element.classList.add("fadeOut");
    enableBodyScroll(this.element);
    window.setTimeout(() => {
      this.element.style.display = "none";
    }, 500);
    document.removeEventListener("keyup", this.onKeyUp);
  }

  /**
   * @param {MouseEvent|KeyboardEvent} e
   */
  next(e) {
    e.preventDefault();
    let i = this.images.findIndex((image) => image.url == this.url);
    if (i == this.images.length - 1) {
      i = -1;
    }
    this.loadImage(this.images[i + 1]);
  }

  /**
   * @param {MouseEvent|KeyboardEvent} e
   */
  prev(e) {
    e.preventDefault();
    let i = this.images.findIndex((image) => image.url == this.url);
    if (i == 0) {
      i = this.images.length;
    }
    this.loadImage(this.images[i - 1]);
  }

  /**
   * @param {string} url URL de l'image
   * @return {HTMLElement}
   */
  buildDOM(obj) {
    const dom = document.getElementById("lightboxModal");
    dom.style.display = "block";
    dom.innerHTML = `
            <button class="lightboxModal__close" aria-label="Fermer la lightbox" tabindex="3">Fermer</button>
            <button class="lightboxModal__next" aria-label="Photo suivante" tabindex="1">Suivant</button>
            <button class="lightboxModal__prev" aria-label="Photo précédente" tabindex="2">Précédent</button>
            <div class="lightboxModal__container">
                <img src="${obj.url}" alt="Le titre de la photo est ${obj.title}">
            </div>
            <h3 class="lightmodal_titre">titre photo ${obj.title}</h3>`;
   
    dom
      .querySelector(".lightboxModal__close")
      .addEventListener("click", this.close.bind(this));
    dom
      .querySelector(".lightboxModal__next")
      .addEventListener("click", this.next.bind(this));
    dom
      .querySelector(".lightboxModal__prev")
      .addEventListener("click", this.prev.bind(this));
    return dom;
  }
}
