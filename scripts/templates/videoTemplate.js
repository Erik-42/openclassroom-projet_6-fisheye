export function videoTemplate(data,photographerName) {
    const {
        id,
        photographerId,
        title,
        video,
        likes,
        date,
        price
    } = data;

    const videoSource = `../../assets/images/Sample Photos/${photographerName}/${video}`;

    

    function getMediaCardDOM() {
        const mediaCardStructure = `
        <video>
        <source src="${videoSource}" />
        </video>
       
        <div class="photograph__gallery__card__photo__info">
          <div class="photograph__gallery__card__photo__info__titre">${title}</div>
          <div class="photograph__gallery__card__photo__info__like">
            <div class="photograph__gallery__card__photo__info__nbr">${likes}</div>
            <i class="photograph__gallery__card__photo__info__heart fas fa-heart"></i>
          </div>
        </div>
        `;

    const container = document.createElement("div");
    container.classList.add("photograph__gallery__card");
    container.innerHTML = mediaCardStructure;
    return container
    }
   
    return {
        id,
        photographerId,
        title,
        video,
        likes,
        date,
        price,
        getMediaCardDOM
    }
}