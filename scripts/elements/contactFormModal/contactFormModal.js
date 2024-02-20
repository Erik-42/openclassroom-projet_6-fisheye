function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const closeBtn = document.querySelector(".closeBtn")
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
