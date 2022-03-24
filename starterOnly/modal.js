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
const closeBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
closeBtn.forEach((btnClose) => btnClose.addEventListener("click", closeModal));

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Add error message
function addErrorMsg(elementId, errorMessage) {
  document
    .getElementById(elementId)
    .setAttribute("data-error-visible", true);
  document
    .getElementById(elementId)
    .setAttribute("data-error", errorMessage);
}

// Remove error message
function removeErrorMsg(elementId) {
  document
    .getElementById(elementId)
    .setAttribute("data-error-visible", false);
  document
    .getElementById(elementId)
    .setAttribute("data-error", "");
}












