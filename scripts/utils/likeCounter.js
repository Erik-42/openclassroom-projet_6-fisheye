import { mediaFactory } from "../utils/mediaFactory";

export function likesPhoto(photographerId, likes) {
  // Additionner les likes
  const additionLikes = mediaFactory(photographerId, likes).reduce(
    (likes) => likes + ajoutLike
  );
  return additionLikes;
}

function ajoutLike() {
  let heart = document.querySelector(
    ".photograph__gallery__card__photo__info__heart"
  );
  heart = addEventListener("click", (e) => {
    const totalLikesElement = document.getElementById(
      "photograph__gallery__card__photo__info__nbr"
    );
    const currentLikes = parseInt(totalLikesElement.textContent);
    totalLikesElement.textContent = currentLikes + 1;
  });
}
