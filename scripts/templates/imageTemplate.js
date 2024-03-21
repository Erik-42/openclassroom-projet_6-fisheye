import {addPopupLike} from '../elements/photographerPopup/photographerPopup.js'

export function imageTemplate(data,photographerName) {
    const {
        id,
        photographerId,
        title,
        image,
        likes,
        date,
        price
    } = data;

    const picture = `../../assets/images/Sample Photos/${photographerName}/${image}`;

    function getMediaCardDOM() {
        const mediaCardStructure = `
        <a class="photograph__gallery__card__photo" href="${picture}">
        <img src="${picture}" alt="Le titre de la photo est ${title}">
        </a>`;

        const photographGalleryCardPhotoInfo = document.createElement('div')
        photographGalleryCardPhotoInfo.className = "photograph__gallery__card__photo__info"
        const photographGalleryCardPhotoInfoTitre = document.createElement('div')
        photographGalleryCardPhotoInfoTitre.className = "photograph__gallery__card__photo__info__titre"
        photographGalleryCardPhotoInfoTitre.innerText = title
        const photographGalleryCardPhotoInfoLike = document.createElement('div')
        photographGalleryCardPhotoInfoLike.className = "photograph__gallery__card__photo__info__like"
        const photographGalleryCardPhotoInfoNbr = document.createElement('div')
        photographGalleryCardPhotoInfoNbr.className = "photograph__gallery__card__photo__info__nbr"
        photographGalleryCardPhotoInfoNbr.innerText = likes
        const photographGalleryCardPhotoInfoHeart = document.createElement('i')
        photographGalleryCardPhotoInfoHeart.className = "photograph__gallery__card__photo__info__heart fas fa-heart"

        photographGalleryCardPhotoInfo.appendChild(photographGalleryCardPhotoInfoTitre)
        photographGalleryCardPhotoInfo.appendChild(photographGalleryCardPhotoInfoLike)
        photographGalleryCardPhotoInfoLike.appendChild(photographGalleryCardPhotoInfoNbr)
        photographGalleryCardPhotoInfoLike.appendChild(photographGalleryCardPhotoInfoHeart)

        photographGalleryCardPhotoInfoLike.addEventListener('click',()=>{
          const totalLikesElement = parseInt(photographGalleryCardPhotoInfoNbr.innerText)
          photographGalleryCardPhotoInfoNbr.innerText =totalLikesElement+1
          addPopupLike()   
        })

    const container = document.createElement("div");
    container.classList.add("photograph__gallery__card");
    container.innerHTML = mediaCardStructure;
    container.appendChild(photographGalleryCardPhotoInfo)
    return container
    }
   
    return {
        id,
        photographerId,
        title,
        image,
        likes,
        date,
        price,
        getMediaCardDOM
    }
}