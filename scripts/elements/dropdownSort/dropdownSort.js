import { sortMedia } from "../../utils/sortMedia.js";

export function dropDownEvent() {
  const nameBtn = document.getElementById("nameBtn");
  const dropdownBtn = document.getElementById("dropdownSelector");
  dropdownBtn.addEventListener("click", () => {
    dropdownMenu();
  });

  const btnPop = document.getElementById("popularity");
  btnPop.addEventListener("click", (e) => {
    e.preventDefault();
    nameBtn.innerText = "Popularité";
    sortMedia("popularity");
  });

  const btnDate = document.getElementById("date");
  btnDate.addEventListener("click", (e) => {
    e.preventDefault();
    nameBtn.innerText = "Date";
    sortMedia("date");
  });

  const btnTitre = document.getElementById("titre");
  btnTitre.addEventListener("click", (e) => {
    e.preventDefault();
    nameBtn.innerText = "Titre";
    sortMedia("title");
  });
}

function dropdownMenu() {
document.getElementById("dropdownSelector__list").classList.toggle("show");
}
