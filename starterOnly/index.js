function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
// const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll("#close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));

var modalbg = document.querySelector('.bground');
window.onclick = function (event) {
  if (event.target == modalbg) {
    modalbg.style.display = "none";
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}


function validFormFirstName() {
  let preRegExp = new RegExp("^[a-zA-ZÀ-ú-s]+$");
  let errorPre = "ce champs n'est pas valide";

  if (!preRegExp.test(this["prenom"].value)) {
    document.getElementById("errorprenom").textContent = errorPre;
    return false;
  }
  document.getElementById("errorprenom").textContent = "";
  return true;
}


function validFormLastName() {
  let nomRegExp = new RegExp("^[a-zA-ZÀ-ú-s]+$");
  let errorNom = "ce champs n'est pas valide";

  if (!nomRegExp.test(this["nom"].value)) {
    document.getElementById("errornom").textContent = errorNom;
    return false;
  }
  document.getElementById("errornom").textContent = "";
  return true;
}


function validFormEmail() {
  let mailRegExp = new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$");
  let erroremail = "ce champs n'est pas valide";

  if (!mailRegExp.test(this["email"].value)) {
    document.getElementById("errormail").textContent = erroremail;
    return false;
  }
  document.getElementById("errormail").textContent = "";
  return true;
}

function validBirthDate() {
  let errorbirthdate = "Vous devez entrer votre date de naissance.";
  let valueDate = document.getElementById('birthdate').value;

  if (!valueDate) {
    document.getElementById("errorbirthdate").textContent = errorbirthdate;
    return false;
  }
  document.getElementById("errorbirthdate").textContent = "";
  return true;
}


document.forms["form"].addEventListener("submit", function (e) {
  e.preventDefault();
  const validFromPrenom = validFormFirstName();
  console.log('validFromPrenom :', validFromPrenom);

  const validFromNom = validFormLastName();
  console.log('validFromNom :', validFromNom);

  const validFromEmail = validFormEmail();
  console.log('validFromEmail :', validFromEmail);

  const validBirthDates = validBirthDate();
  console.log('validBirthDates :', validBirthDates);

  const checkValid = this.checkValidity();
  console.log('checkValid :', checkValid)
});

