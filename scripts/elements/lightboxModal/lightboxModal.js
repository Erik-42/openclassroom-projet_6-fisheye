import { enableBodyScroll, disableBodyScroll } from "../../utils/body-scroll-lock.js";
import { mediaFactory } from "../../utils/mediaFactory.js";

/**
 * @property {HTMLElement} element
 * @property {string[]} images Chemin des images de la lightbox
 * @property {string} url image actuellement affichée
 */

export class LightboxModal {
  static init(mediasCards) {
    const gallery = mediasCards.map((mediasCard) =>
      mediasCard
        .querySelector(".photograph__gallery__card__photo")
        .getAttribute("href")
    );
    mediasCards.forEach((mediasCard) =>
      mediasCard
        .querySelector(".photograph__gallery__card__photo")
        .addEventListener("click", (e) => {
          e.preventDefault();
          new LightboxModal(e.currentTarget.getAttribute("href"), gallery);
        })
    );
  }

  /**
   * @param {string} url URL de l'image actuellement affichée
   * @param {string[]} images Chemin des images de la lightbox
   */
  constructor(url, images) {
    this.element = this.buildDOM(url);
    this.images = images;
    this.loadImage(url);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.appendChild(this.element);
    disableBodyScroll(this.element);
    document.addEventListener("keyup", this.onKeyUp);
  }

  /**
   * @param {string} url URL de l'image actuellement affichée
   */
  loadImage(url) {
    let image;
    this.url = null;
    const container = this.element.querySelector(".lightboxModal__container");
    const loader = document.createElement("div");
    loader.classList.add("lightboxModal__loader");
    container.innerHTML = "";
    container.appendChild(loader);

    if (url.substring(url.length - 4, url.length) == ".mp4") {
      image = document.createElement("video");
      image.controls = true;
      container.removeChild(loader);
      container.appendChild(image);
    } else {
      image = new Image();
      image.onload = () => {
        container.removeChild(loader);
        container.appendChild(image);
        this.url = url;
      };
    }

    image.src = url;
    this.url = url;
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
    let i = this.images.findIndex((image) => image == this.url);
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
    let i = this.images.findIndex((image) => image == this.url);
    if (i == 0) {
      i = this.images.length;
    }
    this.loadImage(this.images[i - 1]);
  }

  /**
   * @param {string} url URL de l'image
   * @return {HTMLElement}
   */
  buildDOM(url) {
    const dom = document.getElementById("lightboxModal");
    dom.style.display = "block";
    dom.innerHTML = `
            <button class="lightboxModal__close" aria-label="Fermer la lightbox" tabindex="3">Fermer</button>
            <button class="lightboxModal__next" aria-label="Photo suivante" tabindex="1">Suivant</button>
            <button class="lightboxModal__prev" aria-label="Photo précédente" tabindex="2">Précédent</button>
            <div class="lightboxModal__container">
                <img src="${url}" alt="${mediaFactory.title}">
                <h3 class="lightmodal_titre">titre photo</h3>
            </div>`;

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
