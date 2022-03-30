function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalThank = document.getElementById('thank');
const closeBtn = document.querySelectorAll(".close");
const closeBtnThank = document.getElementById('close-thank');
const closeBtnThank2 = document.getElementById('btn-close');
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");

// Event Listener : Ouvrir le formulaire d'inscription
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Ouvrir le formulaire d'inscription
function launchModal() {
  modalbg.style.display = "block";
}

// Event Listener : Fermer le formulaire d'inscription
closeBtn.forEach((btnClose) => btnClose.addEventListener("click", closeModal));

// Fermer le formulaire d'inscription
function closeModal() {
  modalbg.style.display = "none";
}

// Event Listener : Fermer le message de validation
closeBtn.forEach((btnClose) => btnClose.addEventListener("click", closeThankModal));
closeBtnThank2.addEventListener("click", closeThankModal);

// Fermer le message de validation
function closeThankModal() {
  modalThank.style.display = "none";
}

// Fonctions : Check les inputs

// RegEx pour nom et prénom 
const validName = /^[A-z\u00C0-\u00FF-]+$/;

// Check de l'input prénom
function checkFirstName() {
  let firstnameValue = document.getElementById('firstname').value.trim();
  let firstError = document.getElementById('first-error');
  if (firstnameValue.length < 2) {
    firstError.setAttribute('data-error-visible', 'true');
    return false;
  } else if (!validName.test(firstnameValue)) {
    firstError.setAttribute('data-error', 'Veuillez saisir un prénom valide');
    firstError.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    firstError.setAttribute('data-error-visible', 'false');
    return true;
  }
};

// Écouter l'évènement : input prénom
document
  .getElementById('firstname')
  .addEventListener('input', (e) => {
    checkFirstName();
  });


// Check de l'input nom
function checkLastName() {
  let lastnameValue = document.getElementById('lastname').value.trim();
  let lastError = document.getElementById('last-error');
  if (lastnameValue.length < 2) {
    lastError.setAttribute('data-error-visible', 'true');
    return false;
  } else if (!validName.test(lastnameValue)) {
    lastError.setAttribute('data-error', 'Veuillez saisir un nom valide');
    lastError.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    lastError.setAttribute('data-error-visible', 'false');
    return true;
  }
};

// Écouter l'évènement : input nom
document
  .getElementById('lastname')
  .addEventListener('input', (e) => {
    checkLastName();
  });

// Check de l'input email
function checkValidEmail() {
  let emailValue = document.getElementById('email').value.trim();
  let emailError = document.getElementById('email-error');
  // RegEx 
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue.length === 0) {
    emailError.setAttribute('data-error', 'Le champ ne doit pas être vide.');
    emailError.setAttribute('data-error-visible', 'true');
    return false;
  } else if (!validEmail.test(emailValue)) {
    emailError.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    emailError.setAttribute('data-error-visible', 'false');
    return true;
  }
};

// Écouter l'évènement : input email
document
  .getElementById('email')
  .addEventListener('input', (e) => {
    checkValidEmail();
  });

// Check de l'input date
function checkValidDate() {
  let birthdateValue = document.getElementById('birthdate').value;
  let birthdateError = document.getElementById('date-error');
  if (birthdateValue !== "") {
    birthdateError.setAttribute('data-error-visible', 'false');
    return true;
  } else {
    birthdateError.setAttribute('data-error-visible', 'true');
    return false;
  }
};

// Écouter l'évènement : input date
document
  .getElementById('birthdate')
  .addEventListener('input', (e) => {
    checkValidDate();
  });

// Check de l'input nombre
function checkQuantity() {
  let quantityValue = document.getElementById('quantity').value;
  let quantityError = document.getElementById('quantity-error');
  const validQuantity = /^[0-9]*$/;
  if (quantityValue === '') {
    quantityError.setAttribute('data-error-visible', 'true');
    return false;
  } else if (!validQuantity.test(quantityValue)) {
    quantityError.setAttribute('data-error', 'Veuillez saisir un nombre valide');
    quantityError.setAttribute('data-error-visible', 'true');
    return false
  } else {
    quantityError.setAttribute('data-error-visible', 'false');
    return true;
  }
};

// Écouter l'évènement : input nombre
document
  .getElementById('quantity')
  .addEventListener('input', (e) => {
    checkQuantity();
  });

// Check de l'input localisation
function isCheckedLocation() {
  // Input type radio
  let location1 = document.getElementById('location1');
  let location2 = document.getElementById('location2');
  let location3 = document.getElementById('location3');
  let location4 = document.getElementById('location4');
  let location5 = document.getElementById('location5');
  let location6 = document.getElementById('location6');
  let locationError = document.getElementById('location-error');
  // Vérifier si au moins 1 option est cochée
  if (location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked) {
    locationError.setAttribute('data-error-visible', 'false');
    return true;
  } else {
    locationError.setAttribute('data-error-visible', 'true');
    return false;
  }
};

// Écouter l'évènement : input localisation
document
  .querySelectorAll('[name=location]').forEach((location) => {
    location.addEventListener('input', (e) => {
      isCheckedLocation();
    });
  });

// Check de l'input conditions d'utilisation
function isCheckedConditions() {
  let conditionsCheckbox = document.getElementById('checkbox1');
  let conditionsError = document.getElementById('conditions-error');
  if (!conditionsCheckbox.checked) {
    conditionsError.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    conditionsError.setAttribute('data-error-visible', 'false');
    return true;
  }
};

// Écouter l'évènement : input conditions d'utilisation
document
  .getElementById('conditions-error')
  .addEventListener('input', (e) => {
    isCheckedConditions();
  });


// Validation du formulaire
function validateForm() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (checkFirstName() && checkLastName() && checkValidEmail() && checkValidDate() && checkQuantity() && isCheckedLocation() && isCheckedConditions()) {
      modalbg.style.display = "none";
      modalThank.style.display = "block";
    } else {
      return false;
    }
  });
};

// Appel de la fonction de validation
validateForm();







