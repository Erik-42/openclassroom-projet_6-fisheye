// Gestion de la modale //
//ouverture modale
const modalbg = document.querySelector(".bground");

export function launchModal() {
  modalbg.style.display = "block";
}

// Fermeture de la modale
const closeBtn = document.querySelector(".closeBtn");
if(closeBtn) closeBtn.addEventListener("click", resetModal);


// Reset du formulaire
function resetModal() {
  clearAllErrors(); // Suppression de toutes les erreurs
  document.forms["reserve"].reset(); // Reset du formulaire
  modalbg.style.display = "none"; // Rend modale invisible
}

// Suppression de toutes les erreurs
function clearAllErrors() {
  const errorAllMessage = document.querySelectorAll("input");
  errorAllMessage.forEach((msg) => {
    msg.parentElement.setAttribute("data-error", false);
    msg.parentElement.setAttribute("data-error-visible", false);
    msg.textContent = "";
  });
}

// Tests des champs //
// Test du prénom
const firstNameInput = document.getElementById("first");

function checkFirstName() {
  const prenomRegex = /^[a-zA-Z]{2,}$/; // Condition pour au moins 2 caractères alphabétiques

  if (!prenomRegex.test(firstNameInput.value.trim())) {
    addError(firstNameInput, "Entrez au moins 2 caractères pour le prénom.");
    return false;
  } else {
    clearError(firstNameInput);
    return firstNameInput.value;
  }
}

// Test du Nom
const lastNameInput = document.getElementById("last");

function checkLastName() {
  const nomRegex = /^[a-zA-Z]{2,}$/; // Condition pour au moins 2 caractères alphabétiques

  if (!nomRegex.test(lastNameInput.value.trim())) {
    addError(lastNameInput, "Entrez au moins 2 caractères pour le nom.");
    return false;
  } else {
    clearError(lastNameInput);
    return lastNameInput.value;
  }
}

// Test email
const emailInput = document.getElementById("email");

function checkEmail() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Condition pour un email valide

  if (!emailRegex.test(emailInput.value.trim())) {
    addError(emailInput, "Entrez une adresse email valide.");
    return false;
  } else {
    clearError(emailInput);
    return emailInput.value;
  }
}
// Test message
const messageInput = document.getElementById("message");

function checkMessage() {
  const messageRegex = /^[a-zA-Z0-9\s\S]{10,1000}$/; // Condition pour un message valide

  if (!messageRegex.test(messageInput.value.trim())) {
    addError(
      messageInput,
      "Entrez un message contenant au moins 10 caractéres et maximum 1000 caractéres."
    );
    return false;
  } else {
    clearError(messageInput);
    return messageInput.value;
  }
}
// Gestion des erreurs //
// const formData = document.querySelectorAll(".formData");

// Ajout des erreurs en recuperant l'input concerné et le message correspondant
function addError(input, message) {
  const formData = input.parentElement;
  formData.setAttribute("data-error-visible", true);
  formData.setAttribute("data-error", message); //Ajout de l'attribut data-error avec le message au formData
}

// Suppression des erreurs en recuperant l'input concerné
function clearError(input) {
  const formData = input.parentElement;
  formData.setAttribute("data-error-visible", false);
  formData.setAttribute("data-error", "");
}

// Soumission du formulaire //
const submitForm = document.querySelector('form[name="reserve"]');
if(submitForm) submitForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  //controle de la validiter des champs des champs du formulaire individuellement
  const resultCheckInput = {
    firstname: checkFirstName(),
    lastname: checkLastName(),
    email: checkEmail(),
    message: checkMessage(),
  };

  // Controle si tous les champs sont valide
  if (
    checkFirstName() &&
    checkLastName() &&
    checkEmail() &&
    checkMessage()
  ) {

    console.log(resultCheckInput);

    formValid.style.display = "block";
  } else {
    formValid.style.display = "none";
  }
}

//Close modal valid
const formValid = document.getElementById("formValid");
const btnCloseModalValid = document.querySelector(".btn-closeModal");

if(btnCloseModalValid) btnCloseModalValid.addEventListener("click", closeModalValid);

function closeModalValid() {
  formValid.style.display = "none"; //Effacement du formulaire validé
  modalbg.style.display = "none"; //Effacement de la modale
  resetModal(); //Reset de tous les champs du formulaire d'inscription
}