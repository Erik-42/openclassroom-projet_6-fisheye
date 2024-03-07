import { imageTemplate } from "../templates/imageTemplate";
import { videoTemplate } from "../templates/videoTemplate";
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

// let heartClick = document.queryselector(
//   ".photograph__gallery__card__photo__info__heart"
// );

// heartClick.addeventlistener('click', (e) =>{
//     let mediaTarget =e.target.classlist === 'undefined' ? [] : e.target.classlist.value.split (' ');
//     let heartBtn =
//       -1 != mediaTarget.indexof("photograph__gallery__card__photo__info__heart");

//     if (heartBtn) {
//         let totalLikes = parseInt(
//           document.getElementById("photograph__gallery__card__photo__info__nbr")
//             .innerHTML
//         );       
//         let counterLike = e.target.parentNode.firstElementChild.firstElementChild;
//         let likeValue = parseInt(counterLike.innerHTML);
//         let isLiked = -1 != mediaTarget.indexOf("isLiked");
//         document.getElementById(
//           "photograph__gallery__card__photo__info__nbr"
//         ).innerHTML = isLiked ? --totalLikes : ++totalLikes;
//         counterLike.innerHTML = isLiked ? --likeValue : ++likeValue;

//         if (isLiked) {
//             e.target.classList.remove('isLiked');
//             e.target.classList.replace('fas', 'far');
//         } else {
//             e.target.classList.add('isLiked');
//             e.target.classList.replace('far', 'fas');
//                 }
// } })


