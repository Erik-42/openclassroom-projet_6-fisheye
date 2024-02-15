function dropdownDOM() {
  const photographMediaSort = document.querySelector(".photograph__media__sort");
  dropdownStructure.innerHTML = "";

  const dropdownStructure = `
    <button onclick="dropdownMenu()" id="dropdownSelector" class="dropdownBtn" role="button">Popularité
        <i class="fa-solid fa-chevron-down"></i>

        <ul id="dropdownSelector__list" class="dropdownContent" role="listbox">
          <li id="popularity" class="dropdownSelector__list__option" role="option">
            <a class="dropdownSelector__list__option" href="#popularité">Popularité</a>
            <i class="fa-solid fa-chevron-up"></i>
          </li>
          <p class="dropdownSelector__list__line"></p>
          <li id="date" class="dropdownSelector__list__option" role="option">
            <a class="dropdownSelector__list__option" href="#date">Date</a>
            <i class="fa-solid fa-chevron-up"></i>
          </li>
          <p class="dropdownSelector__list__line"></p>
          <li id="titre" class="dropdownSelector__list__option" role="option">
            <a class="dropdownSelector__list__option" href="#titre">Titre</a>
            <i class="fa-solid fa-chevron-up"></i>
          </li>
        </ul>
      </button>
        `;

  const container = document.createElement("div");
  container.classList.add("dropdownMenu");
  container.innerHTML = dropdownStructure;

  photographMediaSort.appendChild(dropdownStructure);


  return container;
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownMenu() {
  document.getElementById("dropdownSelector__list").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropdownBtn")) {
    const dropdowns = document.getElementsByClassName("dropdownContent");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};