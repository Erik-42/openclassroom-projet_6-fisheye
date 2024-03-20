import { addPopupLike } from "../elements/photographerPopup/photographerPopup.js";

export function videoTemplate(data, photographerName) {
  const { id, photographerId, title, video, likes, date, price } = data;
  const videoSource = `../../assets/images/Sample Photos/${photographerName}/${video}`;
  function getMediaCardDOM() {
    const mediaCardStructure = `
    <a href="${videoSource}" class="photograph__gallery__card__photo">
      <video>
        <source src="${videoSource}" alt="${title}">
      </video>
    </a>`;

    const photographGalleryCardPhotoInfo = document.createElement("div");
    photographGalleryCardPhotoInfo.className =
      "photograph__gallery__card__photo__info";
    const photographGalleryCardPhotoInfoTitre = document.createElement("div");
    photographGalleryCardPhotoInfoTitre.className =
      "photograph__gallery__card__photo__info__titre";
    photographGalleryCardPhotoInfoTitre.innerText = title;
    const photographGalleryCardPhotoInfoLike = document.createElement("div");
    photographGalleryCardPhotoInfoLike.className =
      "photograph__gallery__card__photo__info__like";
    const photographGalleryCardPhotoInfoNbr = document.createElement("div");
    photographGalleryCardPhotoInfoNbr.className =
      "photograph__gallery__card__photo__info__nbr";
    photographGalleryCardPhotoInfoNbr.innerText = likes;
    const photographGalleryCardPhotoInfoHeart = document.createElement("i");
    photographGalleryCardPhotoInfoHeart.className =
      "photograph__gallery__card__photo__info__heart fas fa-heart";

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

    photographGalleryCardPhotoInfoLike.addEventListener("click", () => {
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
