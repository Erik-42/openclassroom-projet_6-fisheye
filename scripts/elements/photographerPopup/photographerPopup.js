export function additionLike(medias) {
  // Additionner les likes de chaque photo
  const sommeLikes = medias.reduce(
    (totalLikes, media) => totalLikes + media.likes,
    0
  );

  return sommeLikes;
}

export function addPopupLike() {
  const photographInfoLikeNbr = document.querySelector(
    ".photograph__info__like__nbr"
  );
  const nbTotalLike = parseInt(photographInfoLikeNbr.innerText);
  photographInfoLikeNbr.innerText = nbTotalLike + 1;
}

export function popupPhotographer(photographerPrice, medias) {
  const likesTotalPhotographer = additionLike(medias);
  const popupStructure = `
         <div class="photograph__info__like"">
          <div aria-label="Like total du photographe" id="totalLikes" class="photograph__info__like__nbr">${likesTotalPhotographer}</div>
          <div class="photograph__info__like__heart">
          <i class="fas fa-heart"></i>
          </div>
        </div>
        <div aria-label="Tarif journalier photographe" class="photograph__info__price">${photographerPrice}/jour</div>
        `;

  const container = document.createElement("div");
  container.classList.add("photograph__info");
  container.innerHTML = popupStructure;
  return container;
}
