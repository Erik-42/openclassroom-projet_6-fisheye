import {
  displayMedias,
  medias,
  photographer,
} from "../../pages/photographer/photographerPage";

function clearHTMLMedia(htmlMedia) {
  while (htmlMedia.firstChild) {
    htmlMedia.removeChild(htmlMedia.lastChild);
  }
}

export async function sortMedia(value) {
  const sectionMedia = document.querySelector(".photograph__gallery");
  clearHTMLMedia(sectionMedia);

  switch (value) {
    case "popularity":
      medias.sort((a, b) => b.likes - a.likes);
      break;

    case "date":
      medias.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;

    case "title":
      medias.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }

  displayMedias(medias, photographer.name);
}
