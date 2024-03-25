import { addPopupLike } from "../elements/photographerPopup/photographerPopup.js";

export function videoTemplate(data, photographerName,tabindex) {
  const { id, photographerId, title, video, likes, date, price } = data;
  
  const videoSource = `https://erik-42.github.io/openclassroom-fisheye/assets/images/Sample Photos/${photographerName}/${video}`;
  
  function getMediaCardDOM() {
    const mediaCardStructure = `
    <a tabindex="${tabindex}" href="${videoSource}" class="photograph__gallery__card__photo">
      <video>
        <source src="${videoSource}" aria_label="Le titre de la vidéo est ${title}">
      </video>
      <span class="noshow">Le titre de la vidéo est ${title}</span>
    </a>`;

    const photographGalleryCardPhotoInfo = document.createElement("div");
    photographGalleryCardPhotoInfo.className =
      "photograph__gallery__card__photo__info";
    const photographGalleryCardPhotoInfoTitre = document.createElement("div");
    photographGalleryCardPhotoInfoTitre.className =
      "photograph__gallery__card__photo__info__titre";
    photographGalleryCardPhotoInfoTitre.innerText = title;
    const photographGalleryCardPhotoInfoLike = document.createElement("a");
    photographGalleryCardPhotoInfoLike.href="#"
    photographGalleryCardPhotoInfoLike.setAttribute('tabindex',parseInt(tabindex+1)) 
    photographGalleryCardPhotoInfoLike.className =
      "photograph__gallery__card__photo__info__like";
    const photographGalleryCardPhotoInfoNbr = document.createElement("div");
    photographGalleryCardPhotoInfoNbr.className =
      "photograph__gallery__card__photo__info__nbr";
    photographGalleryCardPhotoInfoNbr.innerText = likes;
    const photographGalleryCardPhotoInfoHeart = document.createElement("span");
    photographGalleryCardPhotoInfoHeart.className =
      "photograph__gallery__card__photo__info__heart fas fa-heart";
    photographGalleryCardPhotoInfoHeart.setAttribute("aria-label", "Coeur Cliquez pour liker la vidéo");

    photographGalleryCardPhotoInfo.appendChild(
      photographGalleryCardPhotoInfoTitre
    );
    photographGalleryCardPhotoInfo.appendChild(
      photographGalleryCardPhotoInfoLike
    );
    photographGalleryCardPhotoInfoLike.appendChild(
      photographGalleryCardPhotoInfoNbr
    );
    photographGalleryCardPhotoInfoLike.appendChild(
      photographGalleryCardPhotoInfoHeart
    );

    photographGalleryCardPhotoInfoLike.addEventListener("click", (e) => {
      e.preventDefault()
      const totalLikesElement = parseInt(
        photographGalleryCardPhotoInfoNbr.innerText
      );
      photographGalleryCardPhotoInfoNbr.innerText = totalLikesElement + 1;
      addPopupLike();
    });

    const container = document.createElement("div");
    container.classList.add("photograph__gallery__card");
    container.innerHTML = mediaCardStructure;
    container.appendChild(photographGalleryCardPhotoInfo);
    return container;
  }

  return {
    id,
    photographerId,
    title,
    video,
    likes,
    date,
    price,
    getMediaCardDOM,
  };
}
