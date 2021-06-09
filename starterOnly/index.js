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


var bdr = document.getElementById("prenom");
bdr.addEventListener('change', validFormFirstName);


function validFormFirstName(event) {
  let preRegExp = new RegExp("^[a-zA-ZÀ-ú-s]+$");
  let errorPre = "ce champ n'est pas valide";
  var border = document.getElementById("prenom");
  let value = this["prenom"] ? this["prenom"].value : event.target.value;

  if (!preRegExp.test(value)) {
    document.getElementById("errorprenom").textContent = errorPre;
    border.style.border = "2px solid red";
    return false;
  }
  document.getElementById("errorprenom").textContent = "";
  border.style.border = "";
  return true;
}

function validFormLastName() {
  let nomRegExp = new RegExp("^[a-zA-ZÀ-ú-s]+$");
  let errorNom = "ce champ n'est pas valide";
  var border = document.getElementById("nom");

  if (!nomRegExp.test(this["nom"].value)) {
    document.getElementById("errornom").textContent = errorNom;
    border.style.border = "2px solid red";
    return false;
  }
  document.getElementById("errornom").textContent = "";
  border.style.border = "";
  return true;
}

function validFormEmail() {
  let mailRegExp = new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$");
  let erroremail = "ce champ n'est pas valide";
  var border = document.getElementById("email");

  if (!mailRegExp.test(this["email"].value)) {
    document.getElementById("errormail").textContent = erroremail;
    border.style.border = "2px solid red";
    return false;
  }
  document.getElementById("errormail").textContent = "";
  border.style.border = "";
  return true;
}

function validBirthDate() {
  let errorbirthdate = "Vous devez entrer votre date de naissance.";
  let valueDate = document.getElementById('birthdate').value;
  var border = document.getElementById("birthdate");

  if (!valueDate) {
    document.getElementById("errorbirthdate").textContent = errorbirthdate;
    border.style.border = "2px solid red";
    return false;
  }
  document.getElementById("errorbirthdate").textContent = "";
  border.style.border = "";
  return true;
}

function validQuantity() {
  let errorquantity = "Vous devez entrer une valeur";
  const quantityTournament = document.getElementById('quantity');
  const numbers = /^[0-9]+$/;
  var border = document.getElementById("quantity");

  if (quantityTournament.value < 0 || quantityTournament.value === "") {
    document.getElementById("errorquantity").textContent = errorquantity;
    border.style.border = "2px solid red";
    return false;
  } else if (!quantityTournament.value.match(numbers)) {
    document.getElementById("errorquantity").textContent = "Veuillez saisir un nombre";
    border.style.border = "2px solid red";
    return false;
  }
  document.getElementById("errorquantity").textContent = "";
  border.style.border = "";
  return true;
}

function validLocCheckbox() {
  let errorLocation = "Veuillez choisir une ville";
  const loc1 = document.getElementById('location1');
  const loc2 = document.getElementById('location2');
  const loc3 = document.getElementById('location3');
  const loc4 = document.getElementById('location4');
  const loc5 = document.getElementById('location5');
  const loc6 = document.getElementById('location6');

  if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) {
    document.getElementById("errorlocation").textContent = errorLocation;
    return false;
  }
  document.getElementById("errorlocation").textContent = "";
  return true;
}

function validCheckbox() {
  let errorCheckbox = "Vous devez lire et accepter les conditions d'utilisation.";
  const check1 = document.getElementById('checkbox1');

  if (!check1.checked) {
    document.getElementById("errorcheckbox").textContent = errorCheckbox;
    return false;
  }
  document.getElementById("errorcheckbox").textContent = "";
  return true;
}

var formRemove = document.getElementById("reserve");
const confirmationMsg = document.getElementById("confirmationMsg");
const closeBtnRed = document.getElementById("closeBtnRed");

const submitBtn = document.querySelector(".btn-submit");

closeBtnRed.style.display = "none";
confirmationMsg.style.display = "none";

document.forms["form"].addEventListener("submit", function (event) {
  event.preventDefault();

  const validFromPrenom = validFormFirstName();
  console.log('validFromPrenom :', validFromPrenom);

  const validFromNom = validFormLastName();
  console.log('validFromNom :', validFromNom);

  const validFromEmail = validFormEmail();
  console.log('validFromEmail :', validFromEmail);

  const validBirthDates = validBirthDate();
  console.log('validBirthDates :', validBirthDates);

  const validFromQuantity = validQuantity();
  console.log('validFromQuantity :', validFromQuantity);

  const validCheckboxLocation = validLocCheckbox();
  console.log('validCheckboxLocation :', validCheckboxLocation);

  const validCheckboxOne = validCheckbox();
  console.log('validCheckboxOne :', validCheckboxOne);

  const checkValid = this.checkValidity();
  console.log('checkValid :', checkValid);

  if (validFromPrenom && validFromNom && validFromEmail && validBirthDates
    && validFromQuantity && validCheckboxLocation && validCheckboxOne && checkValid) {
    form.style.display = "none";
    confirmationMsg.style.display = "block";
    confirmationMsg.style.fontSize = "40px";
    confirmationMsg.style.textAlign = "center";

    closeBtnRed.addEventListener("click", closeModal);
    closeBtnRed.style.display = "block";
    closeBtnRed.style.marginBottom = "30px";
    submitBtn.style.display = "none";
  } else {
    console.log("not valid");
  }
});