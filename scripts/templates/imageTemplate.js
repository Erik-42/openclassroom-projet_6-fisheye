import {addPopupLike} from '../elements/photographerPopup/photographerPopup.js'

export function imageTemplate(data,photographerName,tabindex) {
    const {
        id,
        photographerId,
        title,
        image,
        likes,
        date,
        price
    } = data;

    const picture = `https://erik-42.github.io/openclassroom-fisheye/assets/images/Sample Photos/${photographerName}/${image}`;

    function getMediaCardDOM() {
        const mediaCardStructure = `
        <a tabindex="${tabindex}" class="photograph__gallery__card__photo" href="${picture}">
        <img src="${picture}" alt="Le titre de la photo est ${title}">
        </a>`;

        const photographGalleryCardPhotoInfo = document.createElement('div')
        photographGalleryCardPhotoInfo.className = "photograph__gallery__card__photo__info"
        const photographGalleryCardPhotoInfoTitre = document.createElement('div')
        photographGalleryCardPhotoInfoTitre.className = "photograph__gallery__card__photo__info__titre"
        photographGalleryCardPhotoInfoTitre.innerText = title
        const photographGalleryCardPhotoInfoLike = document.createElement('a')
        photographGalleryCardPhotoInfoLike.href="#"
        photographGalleryCardPhotoInfoLike.setAttribute('tabindex',parseInt(tabindex+1)) 
        photographGalleryCardPhotoInfoLike.className = "photograph__gallery__card__photo__info__like"
        const photographGalleryCardPhotoInfoNbr = document.createElement('div')
        photographGalleryCardPhotoInfoNbr.className = "photograph__gallery__card__photo__info__nbr"
        photographGalleryCardPhotoInfoNbr.innerText = likes
        const photographGalleryCardPhotoInfoHeart = document.createElement('i')
        photographGalleryCardPhotoInfoHeart.className = "photograph__gallery__card__photo__info__heart fas fa-heart"
        photographGalleryCardPhotoInfoHeart.setAttribute =""

        photographGalleryCardPhotoInfo.appendChild(photographGalleryCardPhotoInfoTitre)
        photographGalleryCardPhotoInfo.appendChild(photographGalleryCardPhotoInfoLike)
        photographGalleryCardPhotoInfoLike.appendChild(photographGalleryCardPhotoInfoNbr)
        photographGalleryCardPhotoInfoLike.appendChild(photographGalleryCardPhotoInfoHeart)

        photographGalleryCardPhotoInfoLike.addEventListener('click',(e)=>{
            e.preventDefault()
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