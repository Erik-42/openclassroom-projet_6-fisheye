// import { getPhotographers } from "../../utils/getData.js";
// import { getMediaAndName } from "../../utils/getMediaAndName.js";
// import { photographerTemplate } from "../../templates/photographerTemplate.js";

// export function additionLike(photographerId, data) {
//   // Filtrer les médias du photographe spécifié
//   const mediasPhotographe = getMediaAndName(photographerId, data);

//   // Additionner les likes de chaque photo
//   const sommeLikes = mediasPhotographe.reduce(
//     (totalLikes, media) => totalLikes + media.likes,
<<<<<<< HEAD

//   );

//   return sommeLikes;
// }

// function ajoutLike() {
//     let heart = document.querySelector(".photograph__info__like__heart");
//     heart = addEventListener("click", (e) => {
//       const totalLikesElement = document.getElementById("totalLikes");
//       const currentLikes = parseInt(totalLikesElement.textContent);
//       totalLikesElement.textContent = currentLikes + 1;
//     });

// }

// const photographerId = photographerId;
// const likesTotalPhotographe = additionLike(photographerId, data);

// console.log(photographerId);

// let photograph_info = document.getElementById("photograph__popup");

// function popupPhotographer() {
//   const popupStructure = `
//          <div class="photograph__info__like"">
//           <div id="totalLikes" class="photograph__info__like__nbr">${likesTotalPhotographe}</div>
//           <div class="photograph__info__like__heart">
//           <i class="fas fa-heart"></i>
//           </div>
//         </div>
//         <div class="photograph__info__price">${photographerTemplate.price}/jour</div>
//         `;

=======
    
//   );

//   return sommeLikes;
// }

// function ajoutLike() {
//     let heart = document.querySelector(".photograph__info__like__heart");
//     heart = addEventListener("click", (e) => {
//       const totalLikesElement = document.getElementById("totalLikes");
//       const currentLikes = parseInt(totalLikesElement.textContent);
//       totalLikesElement.textContent = currentLikes + 1;
//     });
  
// }

// const photographerId = photographerId;
// const likesTotalPhotographe = additionLike(photographerId, data);

// console.log(photographerId);

// let photograph_info = document.getElementById("photograph__popup");

// function popupPhotographer() {
//   const popupStructure = `
//          <div class="photograph__info__like"">
//           <div id="totalLikes" class="photograph__info__like__nbr">${likesTotalPhotographe}</div>
//           <div class="photograph__info__like__heart">
//           <i class="fas fa-heart"></i>
//           </div>
//         </div>
//         <div class="photograph__info__price">${photographerTemplate.price}/jour</div>
//         `;

>>>>>>> 74bf382a38ad7332827b28553d8bfac8642a89e1
//   const container = document.createElement("div");
//   container.classList.add("photograph__info");
//   container.innerHTML = popupStructure;
//   return container;
// }


<<<<<<< HEAD
// photograph_info.appendChild(popupPhotographer());
=======
// photograph_info.appendChild(popupPhotographer());
>>>>>>> 74bf382a38ad7332827b28553d8bfac8642a89e1
